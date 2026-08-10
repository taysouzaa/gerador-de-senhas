import readline from 'readline';
import { generatePassword } from './utils/passwordGenerator';
import clipboardy from 'clipboardy';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  console.log('🔐 Gerador de Senhas Seguras');

  let length: number;
  while (true) {
    const input = await ask('Tamanho da senha: ');
    length = parseInt(input, 10);
    if (!isNaN(length) && length > 0) break;
    console.log('Por favor, digite um número válido maior que zero.');
  }

  const uppercase = (await ask('Incluir letras maiúsculas? (s/n): ')).toLowerCase() === 's';
  const lowercase = (await ask('Incluir letras minúsculas? (s/n): ')).toLowerCase() === 's';
  const numbers = (await ask('Incluir números? (s/n): ')).toLowerCase() === 's';
  const symbols = (await ask('Incluir símbolos? (s/n): ')).toLowerCase() === 's';

  try {
    const password = generatePassword(length, uppercase, lowercase, numbers, symbols);
    console.log(`Senha gerada: ${password}`);

    const copy = (await ask('Copiar senha para a área de transferência? (s/n): ')).toLowerCase() === 's';
    if (copy) {
      clipboardy.writeSync(password);
      console.log('Senha copiada!');
    }
  } catch (err: any) {
    console.error('Erro:', err.message);
  }

  rl.close();
}

main();
import inquirer from 'inquirer';
import { generatePassword } from './utils/passwordGenerator';

async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'length',
            message: 'Qual o tamanho da senha que você deseja gerar?',
            validate: (input) => {
                const number = parseInt(input);
                return !isNaN(number) && number > 0 ? true : 'Por favor, insira um número válido.';
            },
        },
        {
            type: 'confirm',
            name: 'includeUppercase',
            message: 'Você deseja incluir letras maiúsculas?',
            default: true,
        },
        {
            type: 'confirm',
            name: 'includeLowercase',
            message: 'Você deseja incluir letras minúsculas?',
            default: true,
        },
        {
            type: 'confirm',
            name: 'includeNumbers',
            message: 'Você deseja incluir números?',
            default: true,
        },
        {
            type: 'confirm',
            name: 'includeSymbols',
            message: 'Você deseja incluir símbolos?',
            default: true,
        },
    ]);

    const password = generatePassword(answers.length, answers.includeUppercase, answers.includeLowercase, answers.includeNumbers, answers.includeSymbols);
    console.log(`Senha gerada: ${password}`);
}

main();
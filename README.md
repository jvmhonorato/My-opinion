# My Opinion

## Overview
The Customer Opinion Evaluation Web Application is a web platform developed to collect feedback from customers about products or services. This document provides technical information on how to configure, implement, and integrate the application. The main technologies used are Babel, Eslint, SWR, google-spreadsheet, Next.js, and Tailwind CSS.



![layout](https://github.com/Honorato-Dev/My-opinion/assets/101150943/e315781b-147c-4bdb-8f75-3eec3aef1fc1)





## Technologies 


<div style="display: inline_block"><br/>
  <img align="center" alt="jvmh-typescript" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  <img align="center" alt="jvmh-nextjs" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
<img align="center" alt="jvmh-reactjs" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
 <img align="center" alt="jvmh-nodejs" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
 <img align="center" alt="jvmh-googleclouds" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" />
<img align="center" alt="jvmh-tailwindcss" height="50" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

## System Requirements

- Node.js
- NPM (Node Package Manager) or Yarn
- Google Spreadsheet API Key

## Development Environment Setup

1. **Clone the application repository from GitHub:**

    ```bash
    git clone git@github.com:Honorato-Dev/My-opinion.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd project_name
    ```

3. **Install project dependencies:**

    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

4. **Configure environment variables:**

    Create a `.env.local` file in the project root and add the following variables:

    ```plaintext
    GOOGLE_API_KEY=YourAPIKey
    SHEET_DOC_ID = <id of the  google docs SHEET>
    SHEET_CLIENT_EMAIL = private key do service credential 
    SHEET_CLIENT_KEY = <private key of services credentials> 

    Replace `YourAPIKey` with your Google Spreadsheet API key.

## Google Spreadsheet Setup

1. **Create a spreadsheet in Google Spreadsheet with the necessary columns to store customer feedback.**
2. **Share the spreadsheet with the service account that will be used to access it.**

## Development

To start the development server, run the following command:

```bash
npm run dev
```

##Integration with Other Systems
The Customer Opinion Evaluation Web Application can be easily integrated with other systems through APIs or webhooks. You can use the provided APIs to send feedback to other systems or integrate Google Spreadsheet data with existing systems.

##References
  - Next.js Documentation
  - Tailwind CSS Documentation
  - SWR Documentation
  - Google Spreadsheet API Documentation
  - This is a basic guide for setting up, developing, and deploying the Customer Opinion Evaluation Web Application. For more details on implementation and customization, refer to the official documentation of the technologies used





## Links

  - Repository: https://github.com/Honorato-Dev/My-opinon
    - In case of sensitive bugs like security vulnerabilities, please contact
      honorato.ofc@gmail.com directly instead of using issue tracker. We value your effort
      to improve the security and privacy of this project!

  ## Versioning

  2.0.0.0


  ## Authors

  * **@Honorato-Dev** 

  Please follow github and join us!
  Thanks to visiting me and good coding!

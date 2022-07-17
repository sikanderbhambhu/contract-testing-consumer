# CONTRACT TESTING

Description: This project aims at demonstrating the implementation of CONTRACT TESTING using PACT JS (using Jest).

Currenctly, this project has the consumer end's implementation which would help you to generate the CONTRACTS which would be handed over to the dedicated provider.


Details of API used for demonstration:
    * Provided By: CTC Team
    * API Name: GetProductAsync 
    * API URL: https://developer.apim-nprd.corp.ad.ctc/api-details#api=product&operation=GetProductsAsync


Steps To Follow:
    1. Take the latest code from the EPAM's internal GIT repo.
    2. Once the project is cloned, please connect to CANTIRE VPN (if working outside CTC INTRANET)
    3. Open the project it an IDE.
    4. Run: `npm i` to install all the dependencies.
    5. Command to run the 'CONSUMER' tests: `npm run test`
    6. Once the tests have executed successfully, please check the "pactFiles" folder in the root directory to refer to the generated PACTS / CONTRACTS.
    7. In case of any failures, please refer to the "logs" folder in the root directory.
    8. Once your pact file / contract file is generated, you should then run the "publish:results" command to push your contract file to PactFlow.
    9. Once it it pushed, please execute "can-deploy" command because it does the following for you:
        'pact-broker can-i-deploy -----' CLI communicates with PactFlow and returns the verification status. This completes the consumer part of bi-directional contract testing cycle.
    10. Explanation of 'can-i-deploy' command:
        a. "pact-broker can-i-deploy": This part of the command remains fixed.
        b. "--pacticipant": Name of the consumer or provider.
        c. "--version": Version of pacticipant being deployed.
        d. "--to-environment": Environment on which deployment will take place.

"can-i-deploy-": "pact-broker can-i-deploy --pacticipant pactflow-example-bi-directional-consumer-pact --version=1.0 --to-environment development"


NOTE: To dynamically create the expected body for contract generation, we must use "Pact JS V3 Matchers". Currently, for this POC, the expected response body has been created by referring to real-time response of the GetProdcutAPI. It is sort of hard-coded for this example.
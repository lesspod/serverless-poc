# lesspod poc

   Experimental lesspod client, build on [servless](https://serverless.com/) !

### HOW TO RUN OFFLINE

Please make sure that serverless is [setup](https://serverless.com/framework/docs/providers/aws/guide/credentials/) before. 

Steps to be followed:

- Creating AWS keys
- Creating and applying the policy as per serverless json provided.

Once you've aws ready to work with serverless framework.

- Clone the repo
- Install dependencies `npm install`
- Setting up credentials with this command.
```
serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

```
It will create .aws folder and keep your credentials there which will later be used to deploy to the aws lambada.

- `sls offline`

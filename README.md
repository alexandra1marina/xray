# xray

1. use npm install to get all dependencies
2. create cypress.env.json file and add: 
```json {
    "JIRA_USERNAME":"",
    "JIRA_API_TOKEN":"",
    "XRAY_CLIENT_ID":"",
    "XRAY_CLIENT_SECRET":""
}
```
3. Map tests to Jira ids like this: `it('KAN-9 displays two todo items by default', () => {`
4. run npm run xray in terminal
5. A test execution run should be created in Jira
require('dotenv').config()

const axios = require('axios')

const jiraApiToken = process.env.JIRA_API_TOKEN
const username = process.env.JIRA_USERNAME
const authString = convertToBase64(`${username}:${jiraApiToken}`)
const projectKey = 'CLAS'
const storiesUrl = 'https://brookzerker.atlassian.net/rest/api/3/issuetype/10003'
const projectsUrl = `https://brookzerker.atlassian.net/rest/api/3/project/${projectKey}`
const workflowUrl = `https://brookzerker.atlassian.net/rest/api/3/project/${projectKey}`

axios.get(storiesUrl, {
  headers: {
    Authorization: `Basic ${authString}`,
    'Content-Type': 'application/json'
  }
})
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.error('error')
    console.error(err)
  })

function convertToBase64(string) {
  const buffer = Buffer.from(string, 'ascii')

  return buffer.toString('base64')
}

// 时间计算 firstSignTime lastSignTime 时间格式10:37
const singDataTime = fetch("https://lysyy.recloud.com.cn/api/lysyy/visitRecord/getPersonnelSignList?&quickSearch=&pageSize=10&pageIndex=1&orderBy=", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqVGE4c0plbGRvSTZRb1IycnpZc3FVd1JKNHFwWGNUX09XOW9nNVpIeC00In0.eyJleHAiOjE3NjE3ODM4NzgsImlhdCI6MTc2MTc0Nzg4MiwiYXV0aF90aW1lIjoxNzYxNzQ3ODc4LCJqdGkiOiJlMGQ5MjA1Ni05NzYwLTQ4NWYtYWUxMC0yOGFkNTZkNzM0NGYiLCJpc3MiOiJodHRwczovL2F1dGg1LnJlY2xvdWQuY29tLmNuL2F1dGgvcmVhbG1zL2x5c3l5IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjVkYjJhYWUwLTMyY2UtNGViMC04ZWEwLWQ1NDEwZTI3NWUyNyIsInR5cCI6IkJlYXJlciIsImF6cCI6Imx5c3l5Iiwibm9uY2UiOiI0NmQ1OTA2NS1jOWY4LTQzZDktODAzMS01YjcwOWRjZjY3ZDMiLCJzZXNzaW9uX3N0YXRlIjoiMzg1ZTkxMTMtNDFhMy00NTZhLTllYzQtZWFlMzg5MTcyZDUxIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2x5c3l5LnJlY2xvdWQuY29tLmNuIiwiaHR0cHM6Ly9seXN5eS1kZG0ucmVjbG91ZC5jb20uY24iLCJodHRwczovL2x5c3l5LXdhZi5yZWNsb3VkLmNvbS5jbiIsImh0dHBzOi8vbHlzeXkucmVjbG91ZC5jb20uY246NzQ0MyJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1seXN5eSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiMzg1ZTkxMTMtNDFhMy00NTZhLTllYzQtZWFlMzg5MTcyZDUxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJiODkxNzAifQ.Jm_O_uKyAPvStShbKtAOo2GOCVkqy4D7wVFtFxGoNwqjHArMBhgZjGbFqnEMt9F7XTIUP8WuM7UfuOKW5P0SAgm0R4mDxBKoD6wPBdqvY8Sivqdgg-UPwpAP2s7kXnI5cXdZu-gO4CzX50BhjueMrprUmL3YfjXgONqEbrgOMiPTy_1jOUrqAqgDE4m-zxvfF07iNVmG-O6YoocxRxq_dpgOidS1rAg_HbjsxLsHIbz5GPF0rCVV6knQYJlNK9Avr1bJtUhfAIavG-yFT4DvkHPlZdtwdHBrF2rfLupLrK2aH4nwqISw6DZiv7vqWTTjLavxqdGTf_1Eq-zUc505QA",
    "cache-control": "no-cache",
    "content-type": "application/json;charset=UTF-8",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"141\", \"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"141\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "Referer": "https://lysyy.recloud.com.cn/vue/index.html"
  },
  "body": "[{\"Type\":2,\"key\":\"sDate\",\"Value\":\"2025-10-27\"},{\"Type\":2,\"key\":\"eDate\",\"Value\":\"2025-10-31\"},{\"Type\":2,\"key\":\"ownerId\",\"Value\":[\"c4c831df-1a2d-48d3-9dea-3c1aee631238\"]},{\"Type\":2,\"key\":\"ownerIds\",\"Value\":\"c4c831df-1a2d-48d3-9dea-3c1aee631238\"},{\"Type\":1,\"key\":\"sign_type\",\"Value\":\"\"},{\"Type\":1,\"key\":\"userStatus\",\"Value\":\"\"}]",
  "method": "POST"
}).then(res => {
    return res.json()
})
singDataTime.then(res => {
    let sumTime = 0;

    function timeHours(time) {
        const [hours, minutes] = time.split(":").map(Number);
        return hours + minutes / 60;
    }

    res.DataList.forEach(item => {
        const time1 = timeHours(item.firstSignTime);
        let time2 = timeHours(item.lastSignTime);
        if (time1 === time2) {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            time2 = hours + minutes / 60;
        }
        console.log(item.signDate + ":", time2 - time1);
        return sumTime += time2 - time1;
    })

    console.log(sumTime);
})
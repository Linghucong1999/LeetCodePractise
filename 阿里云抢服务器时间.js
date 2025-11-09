const aliyun = fetch("https://t.aliyun.com/abs/promotion/queryActivityInventory?activityIds=1212510961365750&preView=true", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-gpc": "1",
        "cookie": "t=dbb9fd4dcf35cb7478ab31d92bb27f48; login_current_pk=1953879668820346; cna=yb/FHvEHtW0CAXeCmHNxERC5; login_aliyunid_pk=1953879668820346; yunpk=1953879668820346; aliyun_lang=zh; sca=2f735752; partitioned_cookie_flag=doubleRemove; _samesite_flag_=true; login_aliyunid=\"aliyun912346****\"; login_aliyunid_ticket=2Cb4fGaCdBZWIzmgdHq6sXXZQg4KFWufyvpeV*0*Cm58slMT1tJw3_8$$UeYgoWG9EQ6ZPu45EuvC8O7GhnDHE95tfhC5jNFYXrof_BNpwU_TOTNChZBoeM1KJexdfb9zhYnsN5Zos6qISCrRt7mGxgi0; login_aliyunid_csrf=_csrf_tk_1294541932682293; hssid=486f6c1a-ce0b-49f1-b019-23b3a4700f0e; hsite=6; aliyun_country=CN; aliyun_site=CN; tfstk=gq5SXO4bF0mStJocruU2lnimhdOQbMNwy2TdSwhrJQdRJB_d-H-yLHWXOijSzY7FJHsC0njUreyldBsA0T-RYQoQOitDT35PU96fqNpPAw4kJHIdAHWz357lrBALbMNa_a2ROvgGNBnFkQYU_jrAQ57lrqdLblPa_DtZZ7SJvMpJHjLeDehdv3LYleLE2vhRvZUXmUhpveLKMjLM-BKdvBUfknYKNcZXo8tRPzBHBgxmX_bJcXhdMWvWfaHE9XCXPL1dyn_5PsTWFhpmbGHOwi7da_v0HxOhuOsCpGEqU3B65i9NFlG5fgYdReI7sVtANw1XEtuZ6Z9BVtCJh2hdyBKJK9s7VYxRUi9MkK3QsESwDafRhymAyG-WwEp46P_vpt5kI_rxNCBGzQWdXoky2OTd4FGwfbOZdq9i9EtalrMnKJD8fXZu-jsJeEYV_rajVvvJoEtalrMnKLLDuKzbl0Mh.; aliyun_cert_type_common=1; currentRegionId=cn-hangzhou; atpsida=6235cb2c9bf3938aa0921e2b_1741932821_4; cnaui=%2522aliyun912346****%2522; aui=%2522aliyun912346****%2522; JSESSIONID=30BE7DF7E84B5CE8EA3B229DA482B244; isg=BFlZ9INaWhtsYwSIL2VHH5hgaEUz5k2YvD3py3sLFwFbgnwUwjTyaTXehEb0OuXQ",
        "Referer": "https://www.aliyun.com/activity/purchase/ecs?spm=5176.8789780.J_3965641470.1.40f639fbAlbIX7",
        "Referrer-Policy": "no-referrer-when-downgrade"
    },
    "body": null,
    "method": "GET"
}).then((res) => {
    return res.json();
});

aliyun.then((res) => {
    const data = res.data;
    for (const key in data) {
        data[key].forEach(item => {
            console.log(item)
        })
    }
})
import NewsContext from "./NewsContext";

const NewsState = (props) => {

    const news = [
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Tanaya Macheel",
            "title": "Stock futures rise slightly ahead of key inflation data, Fed minutes - CNBC",
            "description": "On Tuesday, the S&P 500 and Nasdaq Composite posted their fifth straight day of losses.",
            "url": "https://www.cnbc.com/2022/10/11/stock-market-futures-open-to-close-news.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107060925-1652458971966-2022-05-13T143116Z_1096964027_RC2E6U96V7N5_RTRMADP_3_USA-STOCKS.JPG?v=1665525807&w=1920&h=1080",
            "publishedAt": "2022-10-12T04:40:00Z",
            "content": "Stock futures ticked higher on Wednesday morning as investors awaited the latest inflation numbers and the minutes from the Federal Reserve's latest meeting.\r\nFutures tied to the Dow Jones Industrial… [+1783 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Chinese two-seater 'flying car' makes first public flight in Dubai - South China Morning Post",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhUhzk8lCtL4",
            "urlToImage": null,
            "publishedAt": "2022-10-12T03:04:43Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "'Fast Money' traders respond to Yellen's remarks on fiscal policy - CNBC Television",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DteNZpRYCgpY",
            "urlToImage": null,
            "publishedAt": "2022-10-12T00:52:12Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "Intel Plans Thousands of Job Cuts in Face of PC Slowdown - Bloomberg",
            "description": null,
            "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=bcd85abf-49ea-11ed-a5e2-716c68785966&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0xMC0xMS9pbnRlbC1pcy1wbGFubmluZy10aG91c2FuZHMtb2Ytam9iLWN1dHMtaW4tZmFjZS1vZi1wYy1zbG93ZG93bg==",
            "urlToImage": null,
            "publishedAt": "2022-10-11T23:58:08Z",
            "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Ganesh Rao",
            "title": "It's too early to buy the dip, investor says, naming 8 stocks to buy when the time is right - CNBC",
            "description": "Fund manager John Ricciardi says the bear market bottom is likely some way off.",
            "url": "https://www.cnbc.com/2022/10/12/its-too-early-to-buy-the-dip-investor-says-naming-8-stocks-to-buy-when-the-time-is-right.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/101092343-124383931.jpg?v=1665531132&w=1920&h=1080",
            "publishedAt": "2022-10-11T23:32:12Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Krystal Hur",
            "title": "Cramer's lightning round: Service Corporation International is a good stock to own - CNBC",
            "description": "\"Mad Money\" host Jim Cramer rings the lightning round bell, which means he's giving his answers to callers' stock questions at rapid speed.",
            "url": "https://www.cnbc.com/2022/10/11/cramers-lightning-round-service-corporation-international-is-a-good-stock-to-own.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/102086255-mad-money-lightning.jpg?v=1665529564&w=1920&h=1080",
            "publishedAt": "2022-10-11T23:06:04Z",
            "content": "MGM Resorts International: \"I don't really care for that group, but you know what, I think anything can bounce in that business.\"\r\nTake-Two Interactive Software Inc: \"I don't think that group is doin… [+505 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "'I'm disappointed;' Drivers lament rising fuel prices - WCVB Channel 5 Boston",
            "description": "After months of declines, gas prices in Massachusetts jumped up 10 cents over the past week, with the state average now $3.58.Subscribe to WCVB on YouTube no...",
            "url": "https://www.youtube.com/watch?v=7hzTypn5y1Y",
            "urlToImage": "https://i.ytimg.com/vi/7hzTypn5y1Y/maxresdefault.jpg",
            "publishedAt": "2022-10-11T22:52:13Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Larry Kudlow",
            "title": "Larry Kudlow: '$31 trillion of debt has gone too far' - Fox Business",
            "description": "Larry Kudlow weighs in on Bernanke's record comparing him to Federal Reserve chairman Powell and highlighted Bernanke and Powell's monetary practice on 'Kudlow.'",
            "url": "https://www.foxbusiness.com/media/larry-kudlow-31-trillion-debt-gone-too-far",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/Kudlow-Oct11.jpeg?ve=1&tl=1",
            "publishedAt": "2022-10-11T22:26:56Z",
            "content": "As you know, former Fed Chair Ben Bernanke was just awarded a Nobel Prize in economics. A friend of mine suggested it was the worst Nobel economics prize since Paul Krugman. \r\nI'm not sure I'd go qui… [+4603 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "FOXBusiness",
            "title": "Economist Mohamed El-Erian takes grim IMF inflation warning seriously: 'This is a big deal' - Fox Business",
            "description": "Economist Mohamed El-Erian blamed the Fed for making inflation worse by mischaracterizing the meaning of transitory and not acting \"boldly enough\" last year.",
            "url": "https://www.foxbusiness.com/economy/economist-mohamed-el-erian-takes-grim-imf-inflation-warning-seriously-big-deal",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/10/0/0/Mohamed-El-Erian-Allianz.jpg?ve=1&tl=1",
            "publishedAt": "2022-10-11T22:26:01Z",
            "content": "Allianz chief economic advisor Mohamed El-Erian sounded the alarm on the state of the global economy, telling \"The Story\" for the IMF to say the worst of inflation is yet to come \"very sobering\" and … [+811 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Nolan Hicks",
            "title": "NYC's office occupancy rates surge to post-pandemic high: report - New York Post ",
            "description": "New statistics show NYC’s halting return to the office following the pandemic shutdown increased by nearly 12%.",
            "url": "https://nypost.com/2022/10/11/nycs-office-occupancy-rates-surge-to-post-pandemic-high-report/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/10/newspress-collage-24210465-1665524186938.jpg?quality=75&strip=all&1665509894&w=1024",
            "publishedAt": "2022-10-11T21:57:00Z",
            "content": "The Big Apples halting return to the office following the coronavirus shutdown is gaining steam with occupancy rates jumping by nearly 12 percentage points in just the last month, new statistics show… [+1717 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News12.com"
            },
            "author": null,
            "title": "Police: Plainview boutique owner sold counterfeit items worth over $40 million - News 12 Bronx",
            "description": "Nassau police arrested the owner of a store in Plainview Tuesday and seized more than $40 million worth of clothing in what authorities called the largest counterfeit clothing bust they have ever seen.",
            "url": "https://bronx.news12.com/police-woman-accused-of-selling-counterfeiting-items-worth-over-40-million-from-plainview-storefront",
            "urlToImage": "https://images.ctfassets.net/3kqcuzntcg31/6shN6s9sRHbz6dS8h6Sz19/ee12aa92f44f65082642df4e89be3f51/5cd85267-7a3f-4ecb-9868-5c25e8901a45.jpg",
            "publishedAt": "2022-10-11T21:39:05Z",
            "content": "Nassau\r\npolice arrested the owner of a store in Plainview Tuesday and seized more than\r\n$40 million worth of clothing in what authorities called the largest\r\ncounterfeit clothing bust they have ever … [+1622 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Minneapolis Star Tribune"
            },
            "author": null,
            "title": "In major retreat, Bright Health halts individual health insurance coverage - Star Tribune",
            "description": "The Bloomington-based health insurer will halt individual coverage in 15 states and reduce Medicare Advantage plans to just California and Florida.",
            "url": "https://www.startribune.com/in-major-retreat-bright-health-halts-individual-health-insurance-coverage/600214769/",
            "urlToImage": "https://chorus.stimg.co/22758070/merlin_63072801.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
            "publishedAt": "2022-10-11T21:28:04Z",
            "content": "Bright Health Group will end individual and family health insurance coverage and reduce its Medicare Advantage coverage to just two states, steps that will cut its revenue in half.\r\nThe moves, announ… [+4329 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Harri Weber",
            "title": "Federal gig worker proposal tanks Uber, Lyft and DoorDash stocks - TechCrunch",
            "description": "Gig-worker companies Uber, Lyft and DoorDash took a hit over a Labor Department proposal to \"combat employee misclassification.\"",
            "url": "https://techcrunch.com/2022/10/11/uber-lyft-doordash-stock-tank-gig-worker-rules/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/09/GettyImages-1309794789.jpg?resize=1200,800",
            "publishedAt": "2022-10-11T21:22:30Z",
            "content": "The stock prices of Uber, Lyft and DoorDash slid on Tuesday after the Department of Labor announced proposed changes to how workers should be classified. The prospective guidance is intended to “comb… [+2915 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Al Root",
            "title": "Good News for Tesla Investors: The Stock Is Now Oversold. - Barron's",
            "description": "Shares of electric-vehicle giant Tesla have gone through a brutal stretch lately. Bulls might be getting some relief soon.",
            "url": "https://www.barrons.com/articles/tesla-stock-oversold-51665523145",
            "urlToImage": "https://images.barrons.com/im-639215/social",
            "publishedAt": "2022-10-11T21:19:00Z",
            "content": "Shares of electric-vehicle leader \r\nTesla\r\nhave gone through just a brutal stretch lately. Its been painful for the bulls, but they might be getting some relief soon. \r\nTesla\r\n(ticker: TSLA) stock dr… [+270 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Peter Valdes-Dapena",
            "title": "Honda and LG are spending $3.5 billion to build a battery factory in Ohio - CNN",
            "description": "Honda and South Korean battery maker LG Energy Solutions are investing $3.5 billion to build a joint venture battery factory in southern Ohio, the car company said Tuesday.",
            "url": "https://www.cnn.com/2022/10/11/business/honda-ohio-ev-battery-factory/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221011095627-honda-ev-charging.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-10-11T21:15:00Z",
            "content": "Honda and South Korean battery maker LG Energy Solutions are investing $3.5 billion to build a joint venture battery factory in southern Ohio, the car company said Tuesday.\r\nAn exact location hasnt b… [+2575 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Thomas Germain",
            "title": "The Worst People Who Could Get Their Accounts Back if Elon Musk Buys Twitter - Gizmodo",
            "description": "Musk and other free speech warriors, including the state of Texas, could restore Twitter to its previous cesspool status.",
            "url": "https://gizmodo.com/the-worst-people-who-could-get-their-accounts-back-if-e-1849644087",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/70b5e537a3af270cdcd23a7b75cb857b.jpg",
            "publishedAt": "2022-10-11T21:10:00Z",
            "content": "It seems more and more likely that Elon Musk will be forced to buy Twitter, despite his months of attempts to squirm out of the deal. If the billionaire does get handed the keys to Twitter, big chang… [+3013 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Catherine Thorbecke",
            "title": "TikTok wants to open warehouses - CNN",
            "description": "While seemingly every social media app is copying TikTok, TikTok now appears to be copying Amazon's playbook.",
            "url": "https://www.cnn.com/2022/10/11/tech/tiktok-fulfillment-centers/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221011104215-tiktok-e-commerce-positions-hiring.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-10-11T21:04:00Z",
            "content": "While seemingly every social media app is copying TikTok, TikTok now appears to be copying Amazons playbook.\r\nTikTok appears to be looking to create a new logistics and warehousing network in the Uni… [+1946 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": "Myles McCormick, Antoine Gara",
            "title": "Westinghouse to be sold for $7.9bn in sign of nuclear power revival - Financial Times",
            "description": "News, analysis and comment from the Financial Times, the worldʼs leading global business publication",
            "url": "https://www.ft.com/content/46df2aa9-0963-47a6-881c-f715a18a8527",
            "urlToImage": null,
            "publishedAt": "2022-10-11T21:03:56Z",
            "content": "Journalists in 50+ countries follow the constant flow of money made and lost in oil &amp; gas while\r\ntracking emerging trends and opportunities in the future of energy. Dont miss our exclusive\r\nnewsl… [+20 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "British pension funds step up fire sales as need for cash soars - Reuters UK",
            "description": "UK pension schemes are racing to raise hundreds of billions of pounds to shore up derivatives positions before the Bank of England calls time on support aimed at keeping them afloat.",
            "url": "https://www.reuters.com/world/uk/british-pensions-step-up-multi-billion-pound-asset-fire-sale-need-cash-soars-2022-10-11/",
            "urlToImage": "https://www.reuters.com/resizer/S6GUh5JwOFbk7jJ5FHkyZQ6zy5U=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CNBGCU3U5FM2JP5ZRJ5KWM6IBY.jpg",
            "publishedAt": "2022-10-11T20:52:00Z",
            "content": "LONDON, Oct 11 (Reuters) - UK pension schemes are racing to raise hundreds of billions of pounds to shore up derivatives positions before the Bank of England calls time on support aimed at keeping th… [+5601 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Ray Salmond",
            "title": "Bitcoin analysts and traders say BTC’s low volatility is ‘a calm before the storm’ - Cointelegraph",
            "description": "Stocks markets slide toward yearly lows, while Bitcoin price remains range-bound. Here’s why crypto analysts expect a sharp move from BTC soon.",
            "url": "https://cointelegraph.com/news/bitcoin-analysts-and-traders-say-btc-s-low-volatility-is-a-calm-before-the-storm",
            "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTAvZDc4ZDc5NjEtZjU0Ni00OTc0LTgxZDctYmIzMWVhNWEwY2MwLmpwZw==.jpg",
            "publishedAt": "2022-10-11T20:51:38Z",
            "content": null
        }
    ]

    return (
        <NewsContext.Provider value={{news}}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState

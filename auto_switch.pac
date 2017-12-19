﻿var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)rosinstrument\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)pbskidsplay\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)free-proxy-list\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)securetoken\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)google\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)www\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)maps\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)fbcdn\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)fbsbx\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)doubleclick\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)atdmt\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)learnrxjs\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)webrewrite\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ionicframework\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)redirectingat\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)skimresources\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)uship\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)firebase-dot-google-developers\.appspot\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ship\.cars$/.test(host)) return "+proxy";
        if (/(?:^|\.)fullstory\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)time\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)whatsit\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)shipcar\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)namecheap\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)pinterest\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)pinimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googleadservices\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ajax\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)rawgit\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)alipay\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)alicdn\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)github\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)twimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)whatismybrowser\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)akarnokd\.blogspot\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)189\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)veriplace\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)live\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)android\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)golang\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)w3schools\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)s3\.amazonaws\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)nytstyle\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ntdtv\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)wenxuecity\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)nytimes\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)altervista\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)tonymacx86\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)hackintosh\.zone$/.test(host)) return "+proxy";
        if (/(?:^|\.)angularjs\.blogspot\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)dzone\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ehuoyun\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)shang-ding\.com\.tw$/.test(host)) return "+proxy";
        if (/(?:^|\.)baidu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)gmail\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)sunansheng\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)tovganesh\.blogspot\.in$/.test(host)) return "+proxy";
        if (/(?:^|\.)akamai\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)zhihu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)itwendao\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)wfinfo\.cn$/.test(host)) return "DIRECT";
        if (/(?:^|\.)dgcolorway\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)qq\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)medium\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)blogger\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)cnzz\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)mmstat\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)alipayobjects\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)thoughts-on-java\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)githubapp\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)raw\.githubusercontent\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)apkpure\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)fasterxml\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)jboss\.org$/.test(host)) return "DIRECT";
        if (/(?:^|\.)mirocupak\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)swaggerhub\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)drift\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)cloudflare\.com$/.test(host)) return "+proxy";
        if (/^internal\.example\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)example\.com$/.test(host)) return "+proxy";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (host === "127.0.0.1" || host === "::1" || host.indexOf(".") < 0) return "DIRECT";
        return "SOCKS5 localhost:7070; SOCKS localhost:7070";
    }
});
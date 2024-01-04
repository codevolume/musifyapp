const key = "AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30";
const visitorID = "Cgtrd3R2TjJybThLZyiyorGsBjIKCgJIVRIEEgAgOg%3D%3D";
let previousResponse = "";

import digestResultResponse from "./parser";

let suggestFormatter = (response) => {
    return new Promise((resolved) => {
        try {
            let content = response["contents"][0]["searchSuggestionsSectionRenderer"]["contents"];
            let returnValue = [];
            delete content[0];

            for (let x in content) {
                let text = content[x]["searchSuggestionRenderer"]["suggestion"]["runs"][0]["text"] + content[x]["searchSuggestionRenderer"]["suggestion"]["runs"][1]["text"];
                returnValue.push(text);
            }

            previousResponse = returnValue;
            resolved(returnValue);

        } catch (error) {
            resolved(previousResponse);
        }


    })
}

let suggest = (query) => {
    return new Promise((resolved) => {
        fetch("https://music.youtube.com/youtubei/v1/music/get_search_suggestions?key=" + key + "&prettyPrint=false", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
                "sec-ch-ua-arch": "\"x86\"",
                "sec-ch-ua-bitness": "\"64\"",
                "sec-ch-ua-full-version": "\"120.0.6099.130\"",
                "sec-ch-ua-full-version-list": "\"Not_A Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"120.0.6099.130\", \"Google Chrome\";v=\"120.0.6099.130\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-model": "\"\"",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-ch-ua-platform-version": "\"15.0.0\"",
                "sec-ch-ua-wow64": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "same-origin",
                "sec-fetch-site": "same-origin",
                "x-goog-visitor-id": visitorID,
                "x-youtube-bootstrap-logged-in": "false",
                "x-youtube-client-name": "67",
                "x-youtube-client-version": "1.20231214.00.00"
            },
            "referrer": "https://music.youtube.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"input\":\"" + query + "\",\"context\":{\"client\":{\"hl\":\"en\",\"gl\":\"HU\",\"remoteHost\":\"37.76.26.186\",\"deviceMake\":\"\",\"deviceModel\":\"\",\"visitorData\":\"" + visitorID + "\",\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36,gzip(gfe)\",\"clientName\":\"WEB_REMIX\",\"clientVersion\":\"1.20231214.00.00\",\"osName\":\"Windows\",\"osVersion\":\"10.0\",\"originalUrl\":\"https://music.youtube.com/?cbrd=1\",\"platform\":\"DESKTOP\",\"clientFormFactor\":\"UNKNOWN_FORM_FACTOR\",\"configInfo\":{\"appInstallData\":\"CLKisawGEIiHsAUQvbauBRDNlbAFEOuTrgUQlPr-EhC3768FEKihsAUQ54b_EhDQjbAFEKSgsAUQt-r-EhD7n7AFEOmMsAUQ_bj9EhCmgbAFEPmfsAUQ_Z-wBRDks_4SEPX5rwUQrLevBRDqw68FEKagsAUQ3ej-EhCp968FEMzfrgUQopKwBRCei7AFENOVsAUQyfevBRDMrv4SELedsAUQmvCvBRDr6P4SEL6KsAUQ0-GvBRCpoLAFEIjjrwUQ_IWwBRComrAFENnJrwUQvvmvBRC4i64FEMeDsAUQmPz-EhCZlLAFEL6bsAUQvZmwBRCu1P4SENWIsAUQq4KwBRCQorAFEKKBsAUQ57qvBRC7o7AFELz5rwUQpcL-EhDh8q8FENqYsAUQvoT_EhDF_Lci\",\"coldConfigData\":\"CLKisawGEO66rQUQxYWuBRDrk64FEL22rgUQ2O6uBRCkxa8FEM2BsAUQ4YGwBRCwiLAFELKIsAUQuIqwBRC-irAFENOVsAUQnZmwBRDymrAFEL6bsAUQt52wBRD5n7AFEPufsAUQ_Z-wBRCkoLAFEKagsAUQqaCwBRC0oLAFELagsAUQ_aCwBRCoobAFEJCisAUQk6KwBRC7o7AFEIaksAUaMkFPakZveDBDUTNCTHo0aWhRYmttQnJoUFg1Y21mc2tfT19ta01fNl9raU9HUzI0VG5BIjJBT2pGb3gwQ1EzQkx6NGloUWJrbUJyaFBYNWNtZnNrX09fbWtNXzZfa2lPR1MyNFRuQSpMQ0FNU013MFRncGFvQXM0VHBoX1NFdjBHanhuVkFOMGF2UUFWSEpLQzBBemI5Z2FPSHEzSUJwRFpCSl9SekF2Yk9JLThCUWJBU2c9PQ%3D%3D\",\"coldHashData\":\"CLKisawGEhQxMTg2ODA1OTQ3MTU1MjkzMjU3MBiyorGsBjIyQU9qRm94MENRM0JMejRpaFFia21CcmhQWDVjbWZza19PX21rTV82X2tpT0dTMjRUbkE6MkFPakZveDBDUTNCTHo0aWhRYmttQnJoUFg1Y21mc2tfT19ta01fNl9raU9HUzI0VG5BQkxDQU1TTXcwVGdwYW9BczRUcGhfU0V2MEdqeG5WQU4wYXZRQVZISktDMEF6YjlnYU9IcTNJQnBEWkJKX1J6QXZiT0ktOEJRYkFTZz09\",\"hotHashData\":\"CLKisawGEhMyNDY4NzEyMjM0NDIxNDQ1NDg5GLKisawGKJTk_BIo3JP9EijGsv0SKKq0_RIoo_v9Eiiekf4SKJqt_hIoyMr-Eijdzv4SKKjh_hIowu7-EiiV-P4SKMX-_hIouoL_Eiibg_8SKL6E_xIo2oX_Eijnhv8SKKuI_xIyMkFPakZveDBDUTNCTHo0aWhRYmttQnJoUFg1Y21mc2tfT19ta01fNl9raU9HUzI0VG5BOjJBT2pGb3gwQ1EzQkx6NGloUWJrbUJyaFBYNWNtZnNrX09fbWtNXzZfa2lPR1MyNFRuQUI4Q0FNU0pnMEoySV81RmNvQXFEbkFFZThJbXhRVkU0M2l6UXlMN2dIeDRBNjFnQVRNdWNzTDgxWkY%3D\"},\"browserName\":\"Chrome\",\"browserVersion\":\"120.0.0.0\",\"acceptHeader\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7\",\"deviceExperimentId\":\"ChxOek14TnpNeE1qYzNNVEkxTURJeE5UWTFOQT09ELKisawGGLKisawG\",\"screenWidthPoints\":574,\"screenHeightPoints\":909,\"screenPixelDensity\":1,\"screenDensityFloat\":1,\"utcOffsetMinutes\":60,\"userInterfaceTheme\":\"USER_INTERFACE_THEME_DARK\",\"timeZone\":\"Europe/Budapest\",\"musicAppInfo\":{\"pwaInstallabilityStatus\":\"PWA_INSTALLABILITY_STATUS_UNKNOWN\",\"webDisplayMode\":\"WEB_DISPLAY_MODE_BROWSER\",\"storeDigitalGoodsApiSupportStatus\":{\"playStoreDigitalGoodsApiSupportStatus\":\"DIGITAL_GOODS_API_SUPPORT_STATUS_UNSUPPORTED\"}}},\"user\":{\"lockedSafetyMode\":false},\"request\":{\"useSsl\":true,\"internalExperimentFlags\":[],\"consistencyTokenJars\":[]},\"adSignalsInfo\":{\"params\":[{\"key\":\"dt\",\"value\":\"1703694650269\"},{\"key\":\"flash\",\"value\":\"0\"},{\"key\":\"frm\",\"value\":\"0\"},{\"key\":\"u_tz\",\"value\":\"60\"},{\"key\":\"u_his\",\"value\":\"3\"},{\"key\":\"u_h\",\"value\":\"1080\"},{\"key\":\"u_w\",\"value\":\"1920\"},{\"key\":\"u_ah\",\"value\":\"1032\"},{\"key\":\"u_aw\",\"value\":\"1920\"},{\"key\":\"u_cd\",\"value\":\"24\"},{\"key\":\"bc\",\"value\":\"31\"},{\"key\":\"bih\",\"value\":\"909\"},{\"key\":\"biw\",\"value\":\"562\"},{\"key\":\"brdim\",\"value\":\"953,0,953,0,1920,0,974,1039,574,909\"},{\"key\":\"vis\",\"value\":\"1\"},{\"key\":\"wgl\",\"value\":\"true\"},{\"key\":\"ca_type\",\"value\":\"image\"}]}}}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then(async (response) => {
            console.log(response.status, response.statusText)
            let jsonData = await response.json();
            suggestFormatter(jsonData).then((formatted) => {
                resolved(formatted);
            })
        });
    });
};


//TODO: implement search api
let search = (query) => {
    fetch("https://music.youtube.com/youtubei/v1/search?key=" + key + "&prettyPrint=false", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
            "sec-ch-ua-arch": "\"x86\"",
            "sec-ch-ua-bitness": "\"64\"",
            "sec-ch-ua-full-version": "\"120.0.6099.130\"",
            "sec-ch-ua-full-version-list": "\"Not_A Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"120.0.6099.130\", \"Google Chrome\";v=\"120.0.6099.130\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-model": "\"\"",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-ch-ua-platform-version": "\"15.0.0\"",
            "sec-ch-ua-wow64": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "same-origin",
            "sec-fetch-site": "same-origin",
            "x-goog-visitor-id": visitorID,
            "x-youtube-bootstrap-logged-in": "false",
            "x-youtube-client-name": "67",
            "x-youtube-client-version": "1.20231214.00.00"
        },
        "referrer": "https://music.youtube.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"context\":{\"client\":{\"hl\":\"en\",\"gl\":\"HU\",\"remoteHost\":\"37.76.26.186\",\"deviceMake\":\"\",\"deviceModel\":\"\",\"visitorData\":\"" + visitorID + "\",\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36,gzip(gfe)\",\"clientName\":\"WEB_REMIX\",\"clientVersion\":\"1.20231214.00.00\",\"osName\":\"Windows\",\"osVersion\":\"10.0\",\"originalUrl\":\"https://music.youtube.com/?cbrd=1\",\"platform\":\"DESKTOP\",\"clientFormFactor\":\"UNKNOWN_FORM_FACTOR\",\"configInfo\":{\"appInstallData\":\"CLKisawGEIiHsAUQvbauBRDNlbAFEOuTrgUQlPr-EhC3768FEKihsAUQ54b_EhDQjbAFEKSgsAUQt-r-EhD7n7AFEOmMsAUQ_bj9EhCmgbAFEPmfsAUQ_Z-wBRDks_4SEPX5rwUQrLevBRDqw68FEKagsAUQ3ej-EhCp968FEMzfrgUQopKwBRCei7AFENOVsAUQyfevBRDMrv4SELedsAUQmvCvBRDr6P4SEL6KsAUQ0-GvBRCpoLAFEIjjrwUQ_IWwBRComrAFENnJrwUQvvmvBRC4i64FEMeDsAUQmPz-EhCZlLAFEL6bsAUQvZmwBRCu1P4SENWIsAUQq4KwBRCQorAFEKKBsAUQ57qvBRC7o7AFELz5rwUQpcL-EhDh8q8FENqYsAUQvoT_EhDF_Lci\",\"coldConfigData\":\"CLKisawGEO66rQUQxYWuBRDrk64FEL22rgUQ2O6uBRCkxa8FEM2BsAUQ4YGwBRCwiLAFELKIsAUQuIqwBRC-irAFENOVsAUQnZmwBRDymrAFEL6bsAUQt52wBRD5n7AFEPufsAUQ_Z-wBRCkoLAFEKagsAUQqaCwBRC0oLAFELagsAUQ_aCwBRCoobAFEJCisAUQk6KwBRC7o7AFEIaksAUaMkFPakZveDBDUTNCTHo0aWhRYmttQnJoUFg1Y21mc2tfT19ta01fNl9raU9HUzI0VG5BIjJBT2pGb3gwQ1EzQkx6NGloUWJrbUJyaFBYNWNtZnNrX09fbWtNXzZfa2lPR1MyNFRuQSpMQ0FNU013MFRncGFvQXM0VHBoX1NFdjBHanhuVkFOMGF2UUFWSEpLQzBBemI5Z2FPSHEzSUJwRFpCSl9SekF2Yk9JLThCUWJBU2c9PQ%3D%3D\",\"coldHashData\":\"CLKisawGEhQxMTg2ODA1OTQ3MTU1MjkzMjU3MBiyorGsBjIyQU9qRm94MENRM0JMejRpaFFia21CcmhQWDVjbWZza19PX21rTV82X2tpT0dTMjRUbkE6MkFPakZveDBDUTNCTHo0aWhRYmttQnJoUFg1Y21mc2tfT19ta01fNl9raU9HUzI0VG5BQkxDQU1TTXcwVGdwYW9BczRUcGhfU0V2MEdqeG5WQU4wYXZRQVZISktDMEF6YjlnYU9IcTNJQnBEWkJKX1J6QXZiT0ktOEJRYkFTZz09\",\"hotHashData\":\"CLKisawGEhMyNDY4NzEyMjM0NDIxNDQ1NDg5GLKisawGKJTk_BIo3JP9EijGsv0SKKq0_RIoo_v9Eiiekf4SKJqt_hIoyMr-Eijdzv4SKKjh_hIowu7-EiiV-P4SKMX-_hIouoL_Eiibg_8SKL6E_xIo2oX_Eijnhv8SKKuI_xIyMkFPakZveDBDUTNCTHo0aWhRYmttQnJoUFg1Y21mc2tfT19ta01fNl9raU9HUzI0VG5BOjJBT2pGb3gwQ1EzQkx6NGloUWJrbUJyaFBYNWNtZnNrX09fbWtNXzZfa2lPR1MyNFRuQUI4Q0FNU0pnMEoySV81RmNvQXFEbkFFZThJbXhRVkU0M2l6UXlMN2dIeDRBNjFnQVRNdWNzTDgxWkY%3D\"},\"browserName\":\"Chrome\",\"browserVersion\":\"120.0.0.0\",\"acceptHeader\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7\",\"deviceExperimentId\":\"ChxOek14TnpNeE1qYzNNVEkxTURJeE5UWTFOQT09ELKisawGGLKisawG\",\"screenWidthPoints\":574,\"screenHeightPoints\":909,\"screenPixelDensity\":1,\"screenDensityFloat\":1,\"utcOffsetMinutes\":60,\"userInterfaceTheme\":\"USER_INTERFACE_THEME_DARK\",\"timeZone\":\"Europe/Budapest\",\"musicAppInfo\":{\"pwaInstallabilityStatus\":\"PWA_INSTALLABILITY_STATUS_UNKNOWN\",\"webDisplayMode\":\"WEB_DISPLAY_MODE_BROWSER\",\"storeDigitalGoodsApiSupportStatus\":{\"playStoreDigitalGoodsApiSupportStatus\":\"DIGITAL_GOODS_API_SUPPORT_STATUS_UNSUPPORTED\"}}},\"user\":{\"lockedSafetyMode\":false},\"request\":{\"useSsl\":true,\"internalExperimentFlags\":[],\"consistencyTokenJars\":[]},\"adSignalsInfo\":{\"params\":[{\"key\":\"dt\",\"value\":\"1703694650269\"},{\"key\":\"flash\",\"value\":\"0\"},{\"key\":\"frm\",\"value\":\"0\"},{\"key\":\"u_tz\",\"value\":\"60\"},{\"key\":\"u_his\",\"value\":\"3\"},{\"key\":\"u_h\",\"value\":\"1080\"},{\"key\":\"u_w\",\"value\":\"1920\"},{\"key\":\"u_ah\",\"value\":\"1032\"},{\"key\":\"u_aw\",\"value\":\"1920\"},{\"key\":\"u_cd\",\"value\":\"24\"},{\"key\":\"bc\",\"value\":\"31\"},{\"key\":\"bih\",\"value\":\"909\"},{\"key\":\"biw\",\"value\":\"562\"},{\"key\":\"brdim\",\"value\":\"953,0,953,0,1920,0,974,1039,574,909\"},{\"key\":\"vis\",\"value\":\"1\"},{\"key\":\"wgl\",\"value\":\"true\"},{\"key\":\"ca_type\",\"value\":\"image\"}]}},\"query\":\" " + query + "\",\"suggestStats\":{\"validationStatus\":\"VALID\",\"parameterValidationStatus\":\"VALID_PARAMETERS\",\"clientName\":\"youtube-music\",\"searchMethod\":\"ENTER_KEY\",\"inputMethods\":[\"KEYBOARD\"],\"originalQuery\":\"" + query + "\",\"availableSuggestions\":[{\"index\":0,\"type\":0},{\"index\":1,\"type\":0},{\"index\":2,\"type\":0},{\"index\":3,\"type\":0}],\"zeroPrefixEnabled\":true,\"firstEditTimeMsec\":11907,\"lastEditTimeMsec\":31188}}",
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    }).then(async (response) => {
       
        console.log(digestResultResponse(await response.json()));
    });
}


//This should work, but its not tested under react native
//TODO, test this function
function fetchRadio(videoId, key = "AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30") {
    return new Promise((resolved) => {
        let body = { "enablePersistentPlaylistPanel": true, "tunerSettingValue": "AUTOMIX_SETTING_NORMAL", "videoId": videoId, "playlistId": "RDAMVM" + videoId, "params": "wAEB", "loggingContext": { "vssLoggingContext": { "serializedContextData": "GhFSREFNVk1YcW9hblRqNXBOWQ%3D%3D" } }, "watchEndpointMusicSupportedConfigs": { "watchEndpointMusicConfig": { "musicVideoType": "MUSIC_VIDEO_TYPE_ATV" } }, "isAudioOnly": true, "responsiveSignals": { "videoInteraction": [] }, "queueContextParams": "", "context": { "client": { "hl": "en", "gl": "HU", "remoteHost": "37.76.46.114", "deviceMake": "", "deviceModel": "", "visitorData": "CgttR0RrTjJEUlAwUSiIkZiqBjIICgJIVRICEgA%3D", "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36,gzip(gfe)", "clientName": "WEB_REMIX", "clientVersion": "1.20231030.01.00", "osName": "Windows", "osVersion": "10.0", "originalUrl": "https://music.youtube.com/?cbrd=1", "platform": "DESKTOP", "clientFormFactor": "UNKNOWN_FORM_FACTOR", "configInfo": { "appInstallData": "CIiRmKoGEPyFsAUQpoGwBRCa8K8FEIjjrwUQq4KwBRDd6P4SEKL4_hIQlPr-EhDJ968FEKiBsAUQp_evBRCIh7AFEOe6rwUQ5LP-EhDQ4q8FEL22rgUQ6-j-EhC-irAFELz5rwUQtMmvBRCu1P4SENnJrwUQuIuuBRC1pq8FEL_3rwUQzN-uBRDT4a8FEOuTrgUQ9fmvBRC3768FEL6LsAUQvvmvBRCh168FEKn3rwUQzK7-EhClwv4SEKy3rwUQ242wBRDUiLAFEP24_RIQ6ej-EhDV5a8FELfq_hIQ6sOvBQ%3D%3D", "coldConfigData": "CIiRmKoGEOq6rQUQxIWuBRDrk64FEL22rgUQ_eiuBRCkxa8FEKPWrwUQodevBRDQ4q8FEJXurwUQt--vBRD-768FEKzzrwUQofqvBRCIh7AFEJqHsAUQw4iwBRDUiLAFEL6KsAUQvouwBRDbjbAFGjJBT2pGb3gzZ3hUcWwxWE5XMks1dmtXczBmZWNaMDJyZTVpSXZWZDNwMFpBTGlZUXduUSIyQU9qRm94M2d4VHFsMVhOVzJLNXZrV3MwZmVjWjAycmU1aUl2VmQzcDBaQUxpWVF3blEqUENBTVNOZzBTZ3Bhb0FzZ1dfZ1dtSDlJU19RYVBHZElCZV93QUZScVNndEFNMl9ZR2poNnlSdDVpblMtRGhBV1YzQWFmMGN3THN6T2dEQT09", "coldHashData": "CIiRmKoGEhQxNTMzMzQ0NDI4MTgwMjc1NTc1MBiIkZiqBjIyQU9qRm94M2d4VHFsMVhOVzJLNXZrV3MwZmVjWjAycmU1aUl2VmQzcDBaQUxpWVF3blE6MkFPakZveDNneFRxbDFYTlcySzV2a1dzMGZlY1owMnJlNWlJdlZkM3AwWkFMaVlRd25RQlBDQU1TTmcwU2dwYW9Bc2dXX2dXbUg5SVNfUWFQR2RJQmVfd0FGUnFTZ3RBTTJfWUdqaDZ5UnQ1aW5TLURoQVdWM0FhZjBjd0xzek9nREE9PQ%3D%3D", "hotHashData": "CIiRmKoGEhMyNDY4NzEyMjM0NDIxNDQ1NDg5GIiRmKoGKJTk_BIo25P9EijGsv0SKKq0_RIonpH-Eiiarf4SKMjK_hIo3c7-Eiiu1P4SKKjh_hIoweb-EiiQ7v4SKI71_hIo4Pb-Eiii-P4SKPf5_hIolPr-EjIyQU9qRm94M2d4VHFsMVhOVzJLNXZrV3MwZmVjWjAycmU1aUl2VmQzcDBaQUxpWVF3blE6MkFPakZveDNneFRxbDFYTlcySzV2a1dzMGZlY1owMnJlNWlJdlZkM3AwWkFMaVlRd25RQixDQU1TR3cwTjJJXzVGY29BcURuQUVSVUtqZUxOREl2dUFmSGdEcldBQkE9PQ%3D%3D" }, "browserName": "Chrome", "browserVersion": "118.0.0.0", "acceptHeader": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7", "deviceExperimentId": "ChxOekk1TnpVeU9UWXlOamt6T0RZNE16YzJPUT09EIiRmKoGGIiRmKoG", "screenWidthPoints": 1091, "screenHeightPoints": 923, "screenPixelDensity": 1, "screenDensityFloat": 1, "utcOffsetMinutes": 60, "userInterfaceTheme": "USER_INTERFACE_THEME_DARK", "timeZone": "Europe/Budapest", "musicAppInfo": { "pwaInstallabilityStatus": "PWA_INSTALLABILITY_STATUS_UNKNOWN", "webDisplayMode": "WEB_DISPLAY_MODE_BROWSER", "storeDigitalGoodsApiSupportStatus": { "playStoreDigitalGoodsApiSupportStatus": "DIGITAL_GOODS_API_SUPPORT_STATUS_UNSUPPORTED" } } }, "user": { "lockedSafetyMode": false }, "request": { "useSsl": true, "internalExperimentFlags": [], "consistencyTokenJars": [] }, "clickTracking": { "clickTrackingParams": "CJ0EEMjeAiITCL_D5v39qYIDFezjQgUdsw4MXA==" }, "adSignalsInfo": { "params": [{ "key": "dt", "value": "1699088524477" }, { "key": "flash", "value": "0" }, { "key": "frm", "value": "0" }, { "key": "u_tz", "value": "60" }, { "key": "u_his", "value": "3" }, { "key": "u_h", "value": "1080" }, { "key": "u_w", "value": "1920" }, { "key": "u_ah", "value": "1032" }, { "key": "u_aw", "value": "1920" }, { "key": "u_cd", "value": "24" }, { "key": "bc", "value": "31" }, { "key": "bih", "value": "923" }, { "key": "biw", "value": "1079" }, { "key": "brdim", "value": "1920,0,1920,0,1920,0,1920,1032,1091,923" }, { "key": "vis", "value": "1" }, { "key": "wgl", "value": "true" }, { "key": "ca_type", "value": "image" }] } } };
        body = JSON.stringify(body);
        fetch("https://music.youtube.com/youtubei/v1/next?key=" + key + "&prettyPrint=false", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "no-cache",
                "content-type": "application/json",
                "pragma": "no-cache",
                "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
                "sec-ch-ua-arch": "\"x86\"",
                "sec-ch-ua-bitness": "\"64\"",
                "sec-ch-ua-full-version": "\"118.0.5993.120\"",
                "sec-ch-ua-full-version-list": "\"Chromium\";v=\"118.0.5993.120\", \"Google Chrome\";v=\"118.0.5993.120\", \"Not=A?Brand\";v=\"99.0.0.0\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-model": "\"\"",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-ch-ua-platform-version": "\"15.0.0\"",
                "sec-ch-ua-wow64": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "same-origin",
                "sec-fetch-site": "same-origin",
                "x-goog-visitor-id": "CgttR0RrTjJEUlAwUSiIkZiqBjIICgJIVRICEgA%3D",
                "x-youtube-bootstrap-logged-in": "false",
                "x-youtube-client-name": "67",
                "x-youtube-client-version": "1.20231030.01.00",
                "cookie": "YSC=byBacud1hWs; VISITOR_PRIVACY_METADATA=CgJIVRICEgA%3D; CONSENT=PENDING+136; SOCS=CAISNQgREitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjMxMDI3LjA5X3AwGgJlbiACGgYIgJOWqgY; VISITOR_INFO1_LIVE=mGDkN2DRP0Q; _gcl_au=1.1.1657075787.1699088524",
                "Referer": "https://music.youtube.com/watch?v=XqoanTj5pNY&list=RDAMVMXqoanTj5pNY",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            body: body,
            "method": "POST"
        }).then(async (response) => {
            console.log(response.status, response.statusText);
            let restext = JSON.parse(await response.text());
            let res = restext["contents"]["singleColumnMusicWatchNextResultsRenderer"]["tabbedRenderer"]["watchNextTabbedResultsRenderer"]["tabs"][0]["tabRenderer"]["content"]["musicQueueRenderer"]["content"]["playlistPanelRenderer"]["contents"]
            //console.log(res);
            let formattedResponse = [];

            for (let i in res) {
                let element = {
                    name: res[i]["playlistPanelVideoRenderer"]["title"]["runs"][0]["text"],
                    videoId: res[i]["playlistPanelVideoRenderer"]["videoId"],
                    thumbnails: res[i]["playlistPanelVideoRenderer"]["thumbnail"]["thumbnails"],
                    type: "SONG"
                }
                element.artists = [];
                if (res[i]["playlistPanelVideoRenderer"]["longBylineText"]["runs"][0]["navigationEndpoint"] != undefined) {
                    element.artists.push({
                        name: res[i]["playlistPanelVideoRenderer"]["longBylineText"]["runs"][0]["text"]
                    })
                }
                formattedResponse.push(element);
            }
            resolved(formattedResponse);
        });

    });
}

export { fetchRadio, search, suggest }
{"version":3,"file":"channel-list.bundle.map.js","names":["this","BX","Messenger","v2","Component","exports","main_date","im_v2_component_elements","im_v2_lib_utils","im_v2_lib_parser","im_v2_lib_dateFormatter","im_v2_lib_logger","im_v2_lib_user","im_v2_application_core","im_v2_lib_rest","main_core","im_v2_const","im_v2_lib_layout","im_v2_lib_menu","MessageText","name","components","ChatTitle","props","item","type","Object","required","data","computed","recentItem","dialog","$store","getters","dialogId","message","formattedDate","formatDate","date","isLastMessageAuthor","authorId","Core","getUserId","lastMessageAuthorAvatar","author","avatar","lastMessageAuthorAvatarStyle","backgroundImage","messageText","isDeleted","loc","formattedText","Parser","purifyRecent","formattedMessageText","SPLIT_INDEX","Utils","text","insertUnseenWhitespace","methods","DateFormatter","formatByTemplate","DateTemplate","recent","phraseCode","replacements","$Bitrix","Loc","getMessage","template","ChannelItem","ChatAvatar","AvatarSize","needsBirthdayPlaceholder","formattedCounter","counter","toString","layout","isUser","ChatType","user","isChat","isChatSelected","Layout","channel","entityId","isChatMuted","isMuted","muteList","find","element","Boolean","isSomeoneTyping","writingList","length","showLastMessage","Settings","invitation","wrapClasses","EmptyState","_itemsPerPage","babelHelpers","classPrivateFieldLooseKey","_isLoading","_pagesLoaded","_hasMoreItemsToLoad","_lastMessageId","_requestItems","_updateModels","_getMinMessageId","ChannelService","constructor","defineProperty","value","_getMinMessageId2","_updateModels2","_requestItems2","firstPageIsLoaded","writable","async","classPrivateFieldLooseBase","result","firstPage","loadNextPage","Promise","resolve","hasMoreItemsToLoad","queryParams","limit","filter","lastMessageId","runAction","RestMethod","imV2RecentChannelTail","catch","error","console","Logger","warn","messages","hasNextPage","getStore","dispatch","restResult","users","chats","files","recentItems","usersPromise","dialoguesPromise","messagesPromise","filesPromise","recentPromise","all","firstMessageId","id","reduce","minId","nextMessage","Math","min","TAG","_pullClient","_requestWatchStart","PullWatchManager","_requestWatchStart2","getPullClient","subscribe","extendWatch","unsubscribe","clearWatch","imV2RecentChannelExtendPullWatch","ChannelRecentMenu","RecentMenu","getMenuItems","getOpenItem","onclick","LayoutManager","getInstance","setLayout","context","menuInstance","close","ChannelList","LoadingState","ListLoadingState","emits","isLoading","isLoadingNextPage","firstPageLoaded","collection","preparedItems","sort","a","b","firstMessage","messageId","secondMessage","isEmptyCollection","created","contextMenuManager","beforeUnmount","destroy","getRecentService","loadFirstPage","getPullWatchManager","deactivated","event","dom","isOneScreenRemaining","target","onClick","$emit","onRightClick","preventDefault","openMenu","currentTarget","service","pullWatchManager","List","Main","Elements","Lib","Application","Const"],"sources":["channel-list.bundle.js"],"mappings":"AACAA,KAAKC,GAAKD,KAAKC,IAAM,CAAC,EACtBD,KAAKC,GAAGC,UAAYF,KAAKC,GAAGC,WAAa,CAAC,EAC1CF,KAAKC,GAAGC,UAAUC,GAAKH,KAAKC,GAAGC,UAAUC,IAAM,CAAC,EAChDH,KAAKC,GAAGC,UAAUC,GAAGC,UAAYJ,KAAKC,GAAGC,UAAUC,GAAGC,WAAa,CAAC,GACnE,SAAUC,EAAQC,EAAUC,EAAyBC,EAAgBC,EAAiBC,EAAwBC,EAAiBC,EAAeC,EAAuBC,EAAeC,EAAUC,EAAYC,EAAiBC,GAC3N,aAGA,MAAMC,EAAc,CAClBC,KAAM,cACNC,WAAY,CACVC,UAAWf,EAAyBe,WAEtCC,MAAO,CACLC,KAAM,CACJC,KAAMC,OACNC,SAAU,OAGdC,OACE,MAAO,CAAC,CACV,EACAC,SAAU,CACRC,aACE,OAAO9B,KAAKwB,IACd,EACAO,SACE,OAAO/B,KAAKgC,OAAOC,QAAQ,aAAajC,KAAK8B,WAAWI,SAAU,KACpE,EACAC,UACE,OAAOnC,KAAKgC,OAAOC,QAAQ,qBAAqBjC,KAAK8B,WAAWI,SAClE,EACAE,gBACE,OAAOpC,KAAKqC,WAAWrC,KAAKmC,QAAQG,KACtC,EACAC,sBACE,OAAOvC,KAAKmC,QAAQK,WAAa3B,EAAuB4B,KAAKC,WAC/D,EACAC,0BACE,MAAMC,EAAS5C,KAAKgC,OAAOC,QAAQ,aAAajC,KAAKmC,QAAQK,UAC7D,IAAKI,EAAQ,CACX,MAAO,EACT,CACA,OAAOA,EAAOC,MAChB,EACAC,+BACE,MAAO,CACLC,gBAAiB,QAAQ/C,KAAK2C,4BAElC,EACAK,cACE,GAAIhD,KAAKmC,QAAQc,UAAW,CAC1B,OAAOjD,KAAKkD,IAAI,iCAClB,CACA,MAAMC,EAAgB1C,EAAiB2C,OAAOC,aAAarD,KAAK8B,YAChE,IAAKqB,EAAe,CAClB,OAAOnD,KAAKkD,IAAI,oCAClB,CACA,OAAOC,CACT,EACAG,uBACE,MAAMC,EAAc,GACpB,OAAO/C,EAAgBgD,MAAMC,KAAKC,uBAAuB1D,KAAKgD,YAAaO,EAC7E,GAEFI,QAAS,CACPtB,WAAWC,GACT,OAAO5B,EAAwBkD,cAAcC,iBAAiBvB,EAAM5B,EAAwBoD,aAAaC,OAC3G,EACAb,IAAIc,EAAYC,EAAe,CAAC,GAC9B,OAAOjE,KAAKkE,QAAQC,IAAIC,WAAWJ,EAAYC,EACjD,GAEFI,SAAU,wrBAeZ,MAAMC,EAAc,CAClBlD,KAAM,cACNC,WAAY,CACVkD,WAAYhE,EAAyBgE,WACrCjD,UAAWf,EAAyBe,UACpCH,eAEFI,MAAO,CACLC,KAAM,CACJC,KAAMC,OACNC,SAAU,OAGdC,OACE,MAAO,CAAC,CACV,EACAC,SAAU,CACR2C,WAAY,IAAMjE,EAAyBiE,WAC3C1C,aACE,OAAO9B,KAAKwB,IACd,EACAY,gBACE,GAAIpC,KAAKyE,yBAA0B,CACjC,OAAOzE,KAAKkD,IAAI,+BAClB,CACA,OAAOlD,KAAKqC,WAAWrC,KAAKmC,QAAQG,KACtC,EACAoC,mBACE,OAAO1E,KAAK+B,OAAO4C,QAAU,GAAK,MAAQ3E,KAAK+B,OAAO4C,QAAQC,UAChE,EACA7C,SACE,OAAO/B,KAAKgC,OAAOC,QAAQ,aAAajC,KAAK8B,WAAWI,SAAU,KACpE,EACA2C,SACE,OAAO7E,KAAKgC,OAAOC,QAAQ,wBAC7B,EACAE,UACE,OAAOnC,KAAKgC,OAAOC,QAAQ,qBAAqBjC,KAAK8B,WAAWI,SAClE,EACA4C,SACE,OAAO9E,KAAK+B,OAAON,OAAST,EAAY+D,SAASC,IACnD,EACAC,SACE,OAAQjF,KAAK8E,MACf,EACAI,iBACE,GAAIlF,KAAK6E,OAAOzD,OAASJ,EAAYmE,OAAOC,QAAQhE,KAAM,CACxD,OAAO,KACT,CACA,OAAOpB,KAAK6E,OAAOQ,WAAarF,KAAK8B,WAAWI,QAClD,EACAoD,cACE,GAAItF,KAAK8E,OAAQ,CACf,OAAO,KACT,CACA,MAAMS,EAAUvF,KAAK+B,OAAOyD,SAASC,MAAKC,GACjCA,IAAY7E,EAAuB4B,KAAKC,cAEjD,OAAOiD,QAAQJ,EACjB,EACAK,kBACE,OAAO5F,KAAK+B,OAAO8D,YAAYC,OAAS,CAC1C,EACArB,2BACE,OAAOzE,KAAKgC,OAAOC,QAAQ,mCAAmCjC,KAAK8B,WAAWI,SAChF,EACA6D,kBACE,OAAO/F,KAAKgC,OAAOC,QAAQ,4BAA4BjB,EAAYgF,SAASjC,OAAOgC,gBACrF,EACAE,aACE,OAAOjG,KAAK8B,WAAWmE,UACzB,EACAC,cACE,MAAO,CACL,aAAclG,KAAKkF,eAEvB,GAEFvB,QAAS,CACPtB,WAAWC,GACT,OAAO5B,EAAwBkD,cAAcC,iBAAiBvB,EAAM5B,EAAwBoD,aAAaC,OAC3G,EACAb,IAAIc,GACF,OAAOhE,KAAKkE,QAAQC,IAAIC,WAAWJ,EACrC,GAEFK,SAAU,+/BA6BZ,MAAM8B,EAAa,CACjB/E,KAAM,aACNQ,OACE,MAAO,CAAC,CACV,EACA+B,QAAS,CACPT,IAAIc,GACF,OAAOhE,KAAKkE,QAAQC,IAAIC,WAAWJ,EACrC,GAEFK,SAAU,uNAQZ,IAAI+B,EAA6BC,aAAaC,0BAA0B,gBACxE,IAAIC,EAA0BF,aAAaC,0BAA0B,aACrE,IAAIE,EAA4BH,aAAaC,0BAA0B,eACvE,IAAIG,EAAmCJ,aAAaC,0BAA0B,sBAC9E,IAAII,EAA8BL,aAAaC,0BAA0B,iBACzE,IAAIK,EAA6BN,aAAaC,0BAA0B,gBACxE,IAAIM,EAA6BP,aAAaC,0BAA0B,gBACxE,IAAIO,EAAgCR,aAAaC,0BAA0B,mBAC3E,MAAMQ,EACJC,cACErF,OAAOsF,eAAehH,KAAM6G,EAAkB,CAC5CI,MAAOC,IAETxF,OAAOsF,eAAehH,KAAM4G,EAAe,CACzCK,MAAOE,IAETzF,OAAOsF,eAAehH,KAAM2G,EAAe,CACzCM,MAAOG,IAETpH,KAAKqH,kBAAoB,MACzB3F,OAAOsF,eAAehH,KAAMoG,EAAe,CACzCkB,SAAU,KACVL,MAAO,KAETvF,OAAOsF,eAAehH,KAAMuG,EAAY,CACtCe,SAAU,KACVL,MAAO,QAETvF,OAAOsF,eAAehH,KAAMwG,EAAc,CACxCc,SAAU,KACVL,MAAO,IAETvF,OAAOsF,eAAehH,KAAMyG,EAAqB,CAC/Ca,SAAU,KACVL,MAAO,OAETvF,OAAOsF,eAAehH,KAAM0G,EAAgB,CAC1CY,SAAU,KACVL,MAAO,GAEX,CACAM,sBACElB,aAAamB,2BAA2BxH,KAAMuG,GAAYA,GAAc,KACxE,MAAMkB,QAAepB,aAAamB,2BAA2BxH,KAAM2G,GAAeA,GAAe,CAC/Fe,UAAW,OAEb1H,KAAKqH,kBAAoB,KACzB,OAAOI,CACT,CACAE,eACE,GAAItB,aAAamB,2BAA2BxH,KAAMuG,GAAYA,KAAgBF,aAAamB,2BAA2BxH,KAAMyG,GAAqBA,GAAsB,CACrK,OAAOmB,QAAQC,SACjB,CACAxB,aAAamB,2BAA2BxH,KAAMuG,GAAYA,GAAc,KACxE,OAAOF,aAAamB,2BAA2BxH,KAAM2G,GAAeA,IACtE,CACAmB,qBACE,OAAOzB,aAAamB,2BAA2BxH,KAAMyG,GAAqBA,EAC5E,EAEFc,eAAeH,GAAeM,UAC5BA,EAAY,OACV,CAAC,GACH,MAAMK,EAAc,CAClBnG,KAAM,CACJoG,MAAO3B,aAAamB,2BAA2BxH,KAAMoG,GAAeA,GACpE6B,OAAQ,CACNC,cAAeR,EAAY,KAAOrB,aAAamB,2BAA2BxH,KAAM0G,GAAgBA,MAItG,MAAMe,QAAe3G,EAAeqH,UAAUnH,EAAYoH,WAAWC,sBAAuBN,GAAaO,OAAMC,IAE7GC,QAAQD,MAAM,qCAAsCA,EAAM,IAE5DlC,aAAamB,2BAA2BxH,KAAMwG,GAAcA,KAC5D7F,EAAiB8H,OAAOC,KAAK,mBAAmBhB,EAAY,QAAUrB,aAAamB,2BAA2BxH,KAAMwG,GAAcA,yBAAqCiB,GACvK,MAAMkB,SACJA,EAAQC,YACRA,GACEnB,EACJpB,aAAamB,2BAA2BxH,KAAM0G,GAAgBA,GAAkBL,aAAamB,2BAA2BxH,KAAM6G,GAAkBA,GAAkB8B,GAClK,IAAKC,EAAa,CAChBvC,aAAamB,2BAA2BxH,KAAMyG,GAAqBA,GAAuB,KAC5F,CACAJ,aAAamB,2BAA2BxH,KAAMuG,GAAYA,GAAc,MACxE,GAAImB,EAAW,MACR7G,EAAuB4B,KAAKoG,WAAWC,SAAS,gCACvD,CACA,OAAOzC,aAAamB,2BAA2BxH,KAAM4G,GAAeA,GAAea,EACrF,CACA,SAASN,EAAe4B,GACtB,MAAMC,MACJA,EAAKC,MACLA,EAAKN,SACLA,EAAQO,MACRA,EAAKC,YACLA,GACEJ,EACJ,MAAMK,EAAevI,EAAuB4B,KAAKoG,WAAWC,SAAS,YAAaE,GAClF,MAAMK,EAAmBxI,EAAuB4B,KAAKoG,WAAWC,SAAS,YAAaG,GACtF,MAAMK,EAAkBzI,EAAuB4B,KAAKoG,WAAWC,SAAS,iBAAkBH,GAC1F,MAAMY,EAAe1I,EAAuB4B,KAAKoG,WAAWC,SAAS,YAAaI,GAClF,MAAMM,EAAgB3I,EAAuB4B,KAAKoG,WAAWC,SAAS,oBAAqBK,GAC3F,OAAOvB,QAAQ6B,IAAI,CAACL,EAAcC,EAAkBC,EAAiBC,EAAcC,GACrF,CACA,SAAStC,EAAkByB,GACzB,GAAIA,EAAS7C,SAAW,EAAG,CACzB,OAAO,CACT,CACA,MAAM4D,EAAiBf,EAAS,GAAGgB,GACnC,OAAOhB,EAASiB,QAAO,CAACC,EAAOC,IACtBC,KAAKC,IAAIH,EAAOC,EAAYH,KAClCD,EACL,CAEA,MAAMO,EAAM,yBACZ,IAAIC,EAA2B7D,aAAaC,0BAA0B,cACtE,IAAI6D,EAAkC9D,aAAaC,0BAA0B,qBAC7E,MAAM8D,EACJrD,cACErF,OAAOsF,eAAehH,KAAMmK,EAAoB,CAC9ClD,MAAOoD,IAET3I,OAAOsF,eAAehH,KAAMkK,EAAa,CACvC5C,SAAU,KACVL,WAAY,IAEdZ,aAAamB,2BAA2BxH,KAAMkK,GAAaA,GAAerJ,EAAuB4B,KAAK6H,eACxG,CACAC,YACElE,aAAamB,2BAA2BxH,KAAMkK,GAAaA,GAAaM,YAAYP,GACpF5D,aAAamB,2BAA2BxH,KAAMmK,GAAoBA,IACpE,CACAM,cACEpE,aAAamB,2BAA2BxH,KAAMkK,GAAaA,GAAaQ,WAAWT,EACrF,EAEF,SAASI,SACFvJ,EAAeqH,UAAUnH,EAAYoH,WAAWuC,iCACvD,CAEA,MAAMC,UAA0B1J,EAAe2J,WAC7CC,eACE,MAAO,CAAC9K,KAAK+K,cACf,CACAA,cACE,MAAO,CACLtH,KAAM1C,EAAUoD,IAAIC,WAAW,oBAC/B4G,QAAS,KACP/J,EAAiBgK,cAAcC,cAAcC,UAAU,CACrD/J,KAAMJ,EAAYmE,OAAOC,QAAQhE,KACjCiE,SAAUrF,KAAKoL,QAAQlJ,WAEzBlC,KAAKqL,aAAaC,OAAO,EAG/B,EAIF,MAAMC,EAAc,CAClBnK,KAAM,cACNC,WAAY,CACV8E,aACAqF,aAAcjL,EAAyBkL,iBACvCnH,eAEFoH,MAAO,CAAC,aACR9J,OACE,MAAO,CACL+J,UAAW,MACXC,kBAAmB,MACnBC,gBAAiB,MAErB,EACAhK,SAAU,CACRiK,aACE,OAAO9L,KAAKgC,OAAOC,QAAQ,8BAC7B,EACA8J,gBACE,MAAO,IAAI/L,KAAK8L,YAAYE,MAAK,CAACC,EAAGC,KACnC,MAAMC,EAAenM,KAAKgC,OAAOC,QAAQ,oBAAoBgK,EAAEG,WAC/D,MAAMC,EAAgBrM,KAAKgC,OAAOC,QAAQ,oBAAoBiK,EAAEE,WAChE,OAAOC,EAAc/J,KAAO6J,EAAa7J,IAAI,GAEjD,EACAgK,oBACE,OAAOtM,KAAK8L,WAAWhG,SAAW,CACpC,GAEFyG,UACEvM,KAAKwM,mBAAqB,IAAI5B,CAChC,EACA6B,gBACEzM,KAAKwM,mBAAmBE,SAC1B,EACAnF,kBACEvH,KAAK2L,UAAY,WACX3L,KAAK2M,mBAAmBC,gBAC9B5M,KAAK6L,gBAAkB,KACvB7L,KAAK2L,UAAY,MACjB3L,KAAK6M,sBAAsBtC,WAC7B,EACAuC,cACE9M,KAAK6M,sBAAsBpC,aAC7B,EACA9G,QAAS,CACP4D,eAAewF,GACb/M,KAAKwM,mBAAmBlB,QACxB,IAAK9K,EAAgBgD,MAAMwJ,IAAIC,qBAAqBF,EAAMG,UAAYlN,KAAK2M,mBAAmB7E,mBAAoB,CAChH,MACF,CACA9H,KAAK4L,kBAAoB,WACnB5L,KAAK2M,mBAAmBhF,eAC9B3H,KAAK4L,kBAAoB,KAC3B,EACAuB,QAAQ3L,GACNxB,KAAKoN,MAAM,YAAa5L,EAAKU,SAC/B,EACAmL,aAAa7L,EAAMuL,GACjBA,EAAMO,iBACNtN,KAAKwM,mBAAmBe,SAAS/L,EAAMuL,EAAMS,cAC/C,EACAb,mBACE,IAAK3M,KAAKyN,QAAS,CACjBzN,KAAKyN,QAAU,IAAI3G,CACrB,CACA,OAAO9G,KAAKyN,OACd,EACAZ,sBACE,IAAK7M,KAAK0N,iBAAkB,CAC1B1N,KAAK0N,iBAAmB,IAAItD,CAC9B,CACA,OAAOpK,KAAK0N,gBACd,EACAxK,IAAIc,GACF,OAAOhE,KAAKkE,QAAQC,IAAIC,WAAWJ,EACrC,GAEFK,SAAU,6nBAoBZhE,EAAQkL,YAAcA,CAEvB,EA/dA,CA+dGvL,KAAKC,GAAGC,UAAUC,GAAGC,UAAUuN,KAAO3N,KAAKC,GAAGC,UAAUC,GAAGC,UAAUuN,MAAQ,CAAC,EAAG1N,GAAG2N,KAAK3N,GAAGC,UAAUC,GAAGC,UAAUyN,SAAS5N,GAAGC,UAAUC,GAAG2N,IAAI7N,GAAGC,UAAUC,GAAG2N,IAAI7N,GAAGC,UAAUC,GAAG2N,IAAI7N,GAAGC,UAAUC,GAAG2N,IAAI7N,GAAGC,UAAUC,GAAG2N,IAAI7N,GAAGC,UAAUC,GAAG4N,YAAY9N,GAAGC,UAAUC,GAAG2N,IAAI7N,GAAGA,GAAGC,UAAUC,GAAG6N,MAAM/N,GAAGC,UAAUC,GAAG2N,IAAI7N,GAAGC,UAAUC,GAAG2N"}
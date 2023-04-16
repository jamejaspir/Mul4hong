公众号:木木IOS分享
关注了解更多新科技！！！
Airspeed VPN 解锁会员 A+
脚本名称:Airspeed VPN 解锁会员 A+
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/api.express-api.com\/v1\/device.+$ url script-response-body express-api.js
[mitm] 
hostname = *.express-api.*
*******************************
Surge

[Script]
^http[s]?:\/\/api.express-api.com\/v1\/device.+$ requires-body=1,max-size=0,script-path=express-api.js

[MITM]
hostname = *.express-api.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.expire= 1800000000000;
obj.data.expire= 1800000000000;
obj.data.type= "vip;
    $done({body: JSON.stringify(obj)});

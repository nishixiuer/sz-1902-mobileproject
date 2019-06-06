import {http} from "@utils/http";
//接口的管理

//主页面
export const discoverData = ()=>http("post","/lovev/miguMovie/find/index.jsp");

export const discoverInformation = (id)=>http("get","api/lovev/miguMovie/data/newsDetail_data.jsp",{cid:id})
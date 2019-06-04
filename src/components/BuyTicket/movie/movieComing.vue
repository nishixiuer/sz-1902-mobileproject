<template>
    <div class="start">
    <BScroll>
        <div class="movieComingContent">
            <p class="movieTime">05月31日<span>周五</span></p>
            <ul>
                <li>
                    <div class="comingPicture">
                        
                    </div>
                    <div class="comingContent">
                        <p>气血旅馆</p>
                        <div class="comingContentBottom">
                            <p>导演：<span>和亚纶</span></p>
                            <p>黄郁钢|彭于晏|张一三</p>	
                        </div>
                    </div>
                    <div class="movieBtn">
                        <i class="wish">想看</i><i class="intendPay">预售</i>
                    </div>
                </li>
                <li>
                    <div class="comingPicture">
                        
                    </div>
                    <div class="comingContent">
                        <p>气血旅馆</p>
                        <div class="comingContentBottom">
                            <p>导演：<span>和亚纶</span></p>
                            <p>黄郁钢|彭于晏|张一三</p>  
                        </div>
                    </div>
                    <div class="movieBtn">
                        <i class="wish">想看</i><i class="intendPay">预售</i>
                    </div>
                </li>
                <li>
                    <div class="comingPicture">
                        
                    </div>
                    <div class="comingContent">
                        <p>气血旅馆</p>
                        <div class="comingContentBottom">
                            <p>导演：<span>和亚纶</span></p>
                            <p>黄郁钢|彭于晏|张一三</p>  
                        </div>
                    </div>
                    <div class="movieBtn">
                        <i class="wish">想看</i><i class="intendPay">预售</i>
                    </div>
                </li>
                <li>
                    <div class="comingPicture">
                        
                    </div>
                    <div class="comingContent">
                        <p>气血旅馆</p>
                        <div class="comingContentBottom">
                            <p>导演：<span>和亚纶</span></p>
                            <p>黄郁钢|彭于晏|张一三</p>  
                        </div>
                    </div>
                    <div class="movieBtn">
                        <i class="wish">想看</i><i class="intendPay">预售</i>
                    </div>
                </li>
                <li>
                    <div class="comingPicture">
                        
                    </div>
                    <div class="comingContent">
                        <p>气血旅馆</p>
                        <div class="comingContentBottom">
                            <p>导演：<span>和亚纶</span></p>
                            <p>黄郁钢|彭于晏|张一三</p>  
                        </div>
                    </div>
                    <div class="movieBtn">
                        <i class="wish">想看</i><i class="intendPay">预售</i>
                    </div>
                </li>
            </ul>
        </div>
    </BScroll> 
    </div>    
</template>

<script>
export default {
    name:"movieComing"

}
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
    .start{
        font-size: .28rem !important;
        margin-top: 2rem;
    }
    .movieComingContent{
        position: absolute;
        width:100%;
        height: max-content;
    }
    .movieComingContent .movieTime{
        padding: .1rem .2rem;
        background: #ccc;
    }
    .movieComingContent img{
        width: 100%;
        height: 100%;
    }    
    .movieComingContent ul li{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
        padding-bottom: .1rem; 
        padding-top: .2rem; 
        overflow: hidden;
    }
    .movieComingContent ul li .comingPicture{
        width: 1.32rem;
        height: 2rem;
    }
    .movieComingContent ul li .comingContent{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .movieComingContent ul li .movieBtn{
        display: flex;
        align-self: center;
    }
    .movieComingContent ul li .wish{
        color: #f74444;
        padding:.1rem .2rem;
        border: 1px solid #F74444;
        border-radius: 5px;
    }
    .intendPay{
        display: none;
        border: 1px soid skyblue;
        padding: .1rem .2rem;
        border-radius: 5px;
    }
</style>

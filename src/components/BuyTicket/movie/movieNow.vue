<template>
    <div>
        <article>
            <div class="wrapper" ref="wrapper">
            <div class="movieArticle">
                <ul>
                    <li v-for="(item,index) in movieNowList" v-bind:key="index">
                        <div class="moviePicture">
                            <img v-bind:src="'http://movie.miguvideo.com/'+item.picAddr">
                        </div>
                        <div class="movieContent">
                            <i>{{item.filmName}}</i>
                            <div>
                                <p>导演：<span>{{item.director}}</span></p>
                                <p class="actor">{{item.actor}}</p>
                            </div>
                        </div>
                        <div class="movieBuy">
                            <i>购票</i>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
	    </article>
    </div>
</template>

<script>
import betterScroll from "better-scroll"
import Vuex from "vuex"
export default {
    name:"movieNow",
    methods:{
        ...Vuex.mapActions({
            actionsMovieNow:"BuyTicket/actionsMovieNow",
        })
    },
    computed:{
        ...Vuex.mapState({
            movieNowList:state=>state.BuyTicket.movieNowList,
        })
    },
    created(){
        this.actionsMovieNow();
    },
    mounted(){
        this.$nextTick(() => {
        this.scroll = new betterScroll(this.$refs.wrapper, {})
      })
    }
}
</script>

<style scoped>
/* 主体 */
    .wrapper{
        height:60%;
    }
    article {
        font-size: .28rem !important;	
        margin-top: 2rem;
    }
    article .movieArticle{
        position: absolute;
        width:100%;
    }
    article ul li{
        margin-top: .2rem;
        border-bottom:1px solid #ccc; 
        padding-bottom: .1rem;
        display: flex;
        justify-content: space-around;
    }
    article ul li .actor{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    article ul li .movieContent{
        width: 55%;
        display: flex;
        flex-direction: column;
        justify-content: space-around; 
    }
    article ul li .movieBuy{
        display: flex;
        align-self: flex-end;
    }
    article ul li .movieBuy i{
        padding:.1rem; 
        border: 1px solid #f74444;
        border-radius: 5px;
        color: #f74444;
    }
    article img{
        width: 100%;
        height: 100%;
    }
    article .moviePicture{
        width: 1.32rem;
        height: 2rem;

    }

</style>

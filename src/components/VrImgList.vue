<template>
  <div class="vr-show">
    <header>
        <h3>精选作品</h3>
        <span>分享最美丽和有趣的全景图片，VR作品</span>
    </header>
    <el-row :gutter="20" class="works-items">
      <el-col v-for="works in worksItems" :key="works.id" :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <!-- 作品内容 -->
        <div class="grid-content bg-purple works" v-on:click="clickWorks(works)">
          <a class="imgbox" href="#" >
            <img class="imgbox" alt="作品图片" :src="works.img">
          </a>
          <span class="works-name">{{works.name}}</span>
          <div class="works-author">
              <span>{{works.author}}</span>
              <span>{{works.location}}</span>
          </div>
        </div>              
      </el-col>
    </el-row>
    <!-- <div>
      <router-link :to="{name:'PanoPage'}"></router-link>
    </div> -->
  </div>
  
</template>

<!-- ================================================================= -->

<script>
  export default{
    name: 'VrImgList',
    data () {
      return {
        worksItems : {
          works1 : {
            id : 111,
            img : require("../assets/image/case1.jpg"),
            name : 'BFC外滩金融中心喷泉',
            author : '上海玩家',  //作者
            location : '上海',  //坐标
            popular : 1152, //人气
            applaud : 581,  //赞
            Comment : []  //评论
          },
          works2 : {
            id : 112,
            img : require("../assets/image/case2.png"),
            name : '湾仔码头 Wan Chai Ferry Pier',
            author : 'Wan Chai Ferry Pier',
            location : '其他',
            popular : 2152,
            applaud : 582,
            Comment : []
          },
          works3 : {
            id : 113,
            img : require("../assets/image/case3.jpg"),
            name : '浪巴铺土林美丽的日出',
            author : 'jack1971',
            location : '其他',
            popular : 3152,
            applaud : 583,
            Comment : []
          },
          works4 : {
            id : 114,
            img : require("../assets/image/case4.jpg"),
            name : '湾仔码头 Wan Chai Ferry Pier',
            author : 'Wan Chai Ferry Pier',
            location : '其他',
            popular : 4152,
            applaud : 584,
            Comment : []
          }
        }
      }
    },
    methods: {
      clickWorks: function (works) {
        console.log("作品信息: ",works)
        this.$router.push({ path: 'funcMenu', params: works })
      }
    }

  }

</script>


<!-- Add "scoped" 属性限制CSS这在该页面生效 ======================================== -->
<style scoped>
.vr-show{
  max-width: 1180px;
  margin: 0 auto;
}
header h3{
    font-weight: 900;
}
header span{
    font-size: 0.85rem;
}
.works-items{
    padding: 1rem 5vw;
}
.work{
    margin: 1rem 0;
}
.works{
    box-shadow: 1px 3px 3px rgb(182, 181, 181); 
    background: #fff9f9;
    height: 100%;
    font-size: .75rem;
    margin: .5rem 0;
}
.works-name{
    margin-top: .5rem;
    display: block;
}
.imgbox{
    width: 100%;
    display: block;
    height: 30vh;
}
.imgbox img{
    width: 100%;
    height: 100%;
    max-width: 100%;
    cursor: pointer;
}
.works-author{
    color: #8c8b8b;
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
}
.works-author span{
    margin-left: 1rem;
}
</style>

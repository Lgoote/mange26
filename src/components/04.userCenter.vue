<template>
  <div class="el-row">
    <div class="el-col el-col-24">
      <div class="comp">
        <div class="tmpl routeanimate">
          <div class="section">
            <div class="location">
              <span>
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">当前位置：</font>
                </font>
              </span>
              <a href="/index.html">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">首页</font>
                </font>
              </a>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> &gt;
                </font>
              </font><a href="/user/center/index.html">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">会员中心</font>
                </font>
              </a>
            </div>
          </div>
          <div class="section clearfix">
            <div class="left-260">
              <div class="bg-wrap">
                <div class="avatar-box">
                  <a
                    href="/user/center/avatar.html"
                    class="img-box"
                  >
                    <i class="iconfont icon-user-full"></i>
                  </a>
                  <h3>
                    <font style="vertical-align: inherit;">
                      <font style="vertical-align: inherit;">

                        ivanyb

                      </font>
                    </font>
                  </h3>
                  <p>
                    <b>
                      <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">注册会员</font>
                      </font>
                    </b>
                  </p>
                </div>
                <div class="center-nav">
                  <ul>
                    <li>
                      <h2>
                        <i class="iconfont icon-order"></i>
                        <span>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">订单管理</font>
                          </font>
                        </span>
                      </h2>
                      <div class="list">
                        <p>
                          <a
                            href="#/site/member/orderlist"
                            class=""
                          >
                            <i class="iconfont icon-arrow-right"></i>
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">交易订单</font>
                            </font>
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <h2>
                        <i class="iconfont icon-user"></i>
                        <span>
                          <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">账户管理</font>
                          </font>
                        </span>
                      </h2>
                      <div class="list">
                        <p>
                          <a
                            href="#/site/member/center"
                            class="router-link-exact-active "
                          >
                            <i class="iconfont icon-arrow-right"></i>
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">账户资料</font>
                            </font>
                          </a>
                        </p>
                        <p>
                          <a
                            href="#/site/member/center"
                            class="router-link-exact-active "
                          >
                            <i clrouter-linkss="iconfont icon-router-linkrrow-right"></i>
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">头像设置</font>
                            </font>
                          </a>
                        </p>
                        <p>
                          <a
                            href="#/site/member/center"
                            class="router-link-exact-active "
                          >
                            <i class="iconfont icon-arrow-right"></i>
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">修改密码</font>
                            </font>
                          </a>
                        </p>
                        <p>
                          <a href="javascript:void(0)">
                            <i class="iconfont icon-arrow-right"></i>
                            <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">退出登录</font>
                            </font>
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="right-auto">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>
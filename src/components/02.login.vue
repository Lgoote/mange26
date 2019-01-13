<template>

  <div>
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
        </font><a href="/login.html">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">会员登录</font>
          </font>
        </a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="bg-wrap">
          <div class="nav-tit">
            <a
              class="selected"
              href="javascript:;"
            >
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">登录账户的</font>
              </font>
            </a>
            <i>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">| </font>
              </font>
            </i>
            <a href="/register.html">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">免费注册</font>
              </font>
            </a>
          </div>

          <div
            id="loginform"
            name="loginform"
            class="login-box"
          >
            <div class="input-box">
              <input
                id="txtUserName"
                name="txtUserName"
                type="text"
                placeholder="用户名/手机/邮箱"
                maxlength="50"
              >
            </div>
            <div class="input-box">
              <input
                id="txtPassword"
                name="txtPassword"
                type="password"
                placeholder="输入登录密码"
                maxlength="16"
              >
            </div>
            <div class="btn-box">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"><input
                    id="btnSubmit"
                    name="btnSubmit"
                    type="submit"
                    value="立即登录"
                  ></font>
              </font>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="goog-gt-tt"
      class="skiptranslate"
      dir="ltr"
    >
      <div style="padding: 8px;">
        <div>
          <div class="logo"><img
              src="https://www.gstatic.com/images/branding/product/1x/translate_24dp.png"
              width="20"
              height="20"
              alt="Google 翻译"
            ></div>
        </div>
      </div>
      <div
        class="top"
        style="padding: 8px; float: left; width: 100%;"
      >
        <h1 class="title gray">原文</h1>
      </div>
      <div
        class="middle"
        style="padding: 8px;"
      >
        <div class="original-text"></div>
      </div>
      <div
        class="bottom"
        style="padding: 8px;"
      >
        <div class="activity-links"><span class="activity-link">提供更好的翻译建议</span><span class="activity-link"></span></div>
        <div class="started-activity-container">
          <hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;">
          <div class="activity-root"></div>
        </div>
      </div>
      <div
        class="status-message"
        style="display: none;"
      ></div>
    </div>

    <div class="goog-te-spinner-pos">
      <div class="goog-te-spinner-animation"><svg
          xmlns="http://www.w3.org/2000/svg"
          class="goog-te-spinner"
          width="96px"
          height="96px"
          viewBox="0 0 66 66"
        >
          <circle
            class="goog-te-spinner-path"
            fill="none"
            stroke-width="6"
            stroke-linecap="round"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>
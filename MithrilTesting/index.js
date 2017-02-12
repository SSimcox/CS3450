/**
 * Created by Steven on 2/10/2017.
 */

var Header = {
  view: function(){
    return m("nav[class='navbar navbar-default'][id='header']",
      m("[class='container-fluid']",
        [
          m("[class='navbar-header col-md-4 navbar-left']",
            m("a[class='navbar-brand'][href='#']",
              m("img[alt='Brand'][class='App-logo'][src='./public/images/logo.svg']")
            )
          ),
          m("h1[class='col-md-4']",
            "Welcome To StudyWars!"
          ),
          m("ul[class='nav navbar-nav navbar-right col-md-4']",
            [
              m("li[role='presentation']",
                m("a[href='about.html']",
                  "About Us"
                )
              ),
              m("li[role='presentation']",
                m("a[href='login.html']",
                  "Sign In/Sign Up"
                )
              ),
              m("li[class='active'][role='presentation']",
                m("a[href='#']",
                  "Home"
                )
              )
            ]
          )
        ]
      )
    )
  }
}

var Footer = {
  view: function(){
    return m("footer[class='footer']",
      m("[class='container']",
        m("p[class='text-muted']",
          "Place sticky footer content here."
        )
      )
    )
  }
}

var Intro = {
  view: function(){
    return m("div",[
      m("h2","Prepare to study like you never have before"),
      m("h2", "Challenge your classmates to see who is best prepared for the test!"),
      m("h2", "Work competitively to learn your stuff"),
      m("h1", "Are you ready?")
    ])
  }
}

var LoginBar = {
  view: function(){
   return m("div",[
      m("div",m("a[href='#']", m("img[class='login-button'][src='./public/images/btn_google_signin_dark_normal_web.png']"))),
      m("div", m("a[href='#']", m("img[class='login-button-facebook'][src='./public/images/facebook.png']")))
    ])
  }
}

var Main = {
  view: function () {
    return m("div.App", [
      m(Header),
      m(Intro),
      m(LoginBar),
      m(Footer)
    ])
  }
}

m.mount(root, Main)
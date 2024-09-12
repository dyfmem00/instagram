document.addEventListener("DOMContentLoaded",
    function(e) {
        let configID = document.querySelector("#id i")
        let idText = document.querySelector("#id span")

        // 아이디 편집
        configID.addEventListener("click",
            function(e) {
                // prompt(): 팝업창에서 사용자로부터 정보를 입력받을 수 있는 도구
                idText.textContent = prompt("새로운 아이디를 입력하세요")
            }
        )

        // 프로필 편집
        let profileEditBtn = document.querySelector("#profile_info button")
        let userInfo = document.querySelector("#userInfo")
        let summary = document.querySelector("#summary")
        let profileDetail = document.querySelector("#profileDetail")
        let changing = false

        profileEditBtn.addEventListener("click",
            function(e) {
                if (changing) {
                    let _userInfo = userInfo.querySelector("input").value
                    let _summary = summary.querySelector("input").value
                    let _profileDetail = profileDetail.querySelector("input").value

                    userInfo.innerHTML = _userInfo
                    summary.innerHTML = _summary

                    if (_profileDetail.startsWith("http")) {
                        _profileDetail = "<a href=" + _profileDetail + ">" + _profileDetail + "</a>"
                    }

                    profileDetail.innerHTML = _profileDetail

                    e.target.textContent = "프로필 편집"
                    changing = false
                } else{
                    let _userInfo = userInfo.textContent
                    let _summary = summary.textContent
                    let _profileDetail = profileDetail.textContent

                    userInfo.innerHTML = "<input value=" + _userInfo + "></input>"
                    summary.innerHTML = "<input value=" + _summary + "></input>"
                    profileDetail.innerHTML = "<input value=" + _profileDetail + "></input>"

                    e.target.textContent = "프로필 편집 완료"
                    changing = true
                }
            }
        )
        // 프로필 사진 변경
        let profile_pic = document.querySelector("#profile_pic .circle_pic");

        profile_pic.addEventListener("mouseover", 
            function(e) {
                e.target.style.filter = "grayscale(50%)"
        });

        profile_pic.addEventListener("mouseleave",
            function(e) {
                e.target.style.filter = "grayscale(0%)"
        });

        profile_pic.addEventListener("click", 
            function(e) {
                profile_pic.setAttribute("src", prompt("url을 입력해 주세요!"))
        });
        
    });


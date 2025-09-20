const header = document.getElementsByClassName("questText")[0].innerText;
const title = document.getElementsByClassName("title")[0];

if (header == "Ngày đánh giá UB:" || header == "Ngày đánh giá RM:") {
    const autofillButton = document.createElement("div");

    autofillButton.textContent = "autofill";
    autofillButton.style.marginLeft = "10px";
    autofillButton.style.cursor = "pointer";

    autofillButton.onclick = function () {
        for (const elem of document.getElementsByClassName(
            "radioAnswersWrap"
        )) {
            if (elem.innerText.trim() == "Yes") {
                elem.getElementsByClassName("SpepeateRadio")[0].click();
            }
        }

        for (const elem of document.getElementsByClassName(
            "radioAnswersTableInside"
        )) {
            if (elem.innerText.trim() == "10") {
                const radio = elem.getElementsByClassName("SpepeateRadio")[0];

                if(radio.id == "obj8341039" || radio.id == "obj8340239") {
                    continue;
                }

                radio.click();
            }
        }

        if (header == "Ngày đánh giá UB:") {
            document.getElementById("obj833948-mi").value =
                "vị trí biển hiệu dễ nhận biết, không gian bên ngoài thoáng đãng, sạch sẽ, chỗ để xe rộng rãi, không có vật cản che khuất";
            document.getElementById("obj833958-mi").value =
                "KH vào cửa có BV trong chào hỏi, KH nói nhu cầu muốn... rồi BV hỗ trợ lấy số thứ tự qua app sau đó BV mời KH vào khu vực chờ. Sau đó được phân đến quầy UB... để được hỗ trợ tư vấn. ";
            document.getElementById("obj833983-mi").value =
                "Diện mạo, tác phong của UB... gọn gàng, chuyên nghiệp, tuân thủ đúng quy định về đồng phục, biển tên. Không gian ĐGD sạch sẽ, các biển hiệu và thông báo rõ ràng, dễ nhìn";
        } else if (header == "Ngày đánh giá RM:") {
            document.getElementById("obj834038-mi").value =
                "KH vào cửa có BV trong chào hỏi, KH nói nhu cầu muốn vay SXKD rồi BV trong mời KH vào khu vực chờ. Sau đó được RM Duy ra tiếp đón và hộ trợ tư vấn.";
            document.getElementById("obj834028-mi").value =
                "vị trí biển hiệu dễ nhận biết, không gian bên ngoài thoáng đãng, sạch sẽ, chỗ để xe rộng rãi, không có vật cản che khuất";
            document.getElementById("obj834063-mi").value =
                "Diện mạo, tác phong của RM Duy gọn gàng, chuyên nghiệp, tuân thủ đúng quy định về đồng phục, biển tên. Không gian ĐGD sạch sẽ, các biển hiệu và thông báo rõ ràng, dễ nhìn";
        }

        alert("Autofilled");
    };

    title.appendChild(autofillButton);
}

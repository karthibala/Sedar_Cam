$(document).ready(function(){
    onDeviceReady();
    var name='guru';
    $.ajax({
        type: "POST",
        url: 'http://wave.elasticbeanstalk.com/app/ajax_sync_product_count.php',
        data : 'uname='+name ,
        dataType:"json",
        processData: false,
        success:function (json) {
            var produc_row_count = json.product_count;
        }
    });
    var showroom_name=localStorage.getItem("showroom_name");
    var user_name=localStorage.getItem("user_name");
    var showroom_id=localStorage.getItem("showroom_id");
    document.getElementById("showroom_name").innerHTML=showroom_name;
    document.getElementById("user_name").innerHTML=user_name;
    var currency = localStorage.getItem("currency");
    var all_price = localStorage.getItem("all_price");
    if (all_price=="TRUE")
    {
        $("#all_price").show();
    }else
    {
        $("#all_price").hide();
    }
    //	alert(currency);
    if (currency=="AED") {
        $("#SAR").addClass("hide");
        $("#QAR").addClass("hide");
        $("#OMR").addClass("hide");
        $("#BHD").addClass("hide");
    }
    if (currency=="SAR") {
        $("#AED").addClass("hide");                          
        $("#QAR").addClass("hide");
        $("#OMR").addClass("hide");
        $("#BHD").addClass("hide");
    }
    if (currency=="QAR") {
        $("#AED").addClass("hide");
        $("#SAR").addClass("hide");				
        $("#OMR").addClass("hide");
        $("#BHD").addClass("hide");
    }
    if (currency=="OMR") {
        $("#AED").addClass("hide");
        $("#SAR").addClass("hide");
        $("#QAR").addClass("hide");
        $("#BHD").addClass("hide");
    }
    if (currency=="BHD") {
        $("#AED").addClass("hide");
        $("#SAR").addClass("hide");
        $("#QAR").addClass("hide");
        $("#OMR").addClass("hide");
    }
});
				var QRcode=localStorage.getItem("QRcode");
				function queryDB(tx) {
						tx.executeSql('SELECT * FROM productlist where item_code = ? collate NOCASE', [QRcode], querySuccess, errorCB);
				}
				function querySuccess(tx, results) {
						var len = results.rows.length;
						for (var i=0; i<len; i++){
                
								//alert(results.rows.item(i).panelheight);
								//alert(results.rows.item(i).weight_gramsm2);
                if (results.rows.item(0).image=="") {
                    $("#previewimage1").addClass("hide");
                    $("#href_item_image1").removeClass("fancybox-buttons1");
                }
                if (results.rows.item(0).image1=="") {
                    $("#previewimage2").addClass("hide");
                    $("#href_item_image2").removeClass("fancybox-buttons1");
                }
                if (results.rows.item(0).image2=="") {
                    $("#previewimage3").addClass("hide");
                    $("#href_item_image3").removeClass("fancybox-buttons1");
                }
                if (results.rows.item(0).image3=="") {
                    $("#previewimage4").addClass("hide");
                    $("#href_item_image4").removeClass("fancybox-buttons1");
                }
                if (results.rows.item(0).image==""&&results.rows.item(0).image1==""&&results.rows.item(0).image2==""&&results.rows.item(0).image3=="") {
                    $("#previewimage_null").removeClass("hide");
                }
                image = "http://wave.elasticbeanstalk.com/admin/"+results.rows.item(i).image;
                image1 = "http://wave.elasticbeanstalk.com/admin/"+results.rows.item(i).image1;
                image2 = "http://wave.elasticbeanstalk.com/admin/"+results.rows.item(i).image2;
                image3 = "http://wave.elasticbeanstalk.com/admin/"+results.rows.item(i).image3;
                
                $("#href_item_image1").attr(image);
                $("#href_item_image2").attr(image1);
                $("#href_item_image3").attr(image2);
                $("#href_item_image4").attr(image3);
                document.getElementById("item_image1").src = image;
                document.getElementById("item_image2").src = image1;
                document.getElementById("item_image3").src = image2;
                document.getElementById("item_image4").src = image3;
                
								document.getElementById("item_code").innerHTML = results.rows.item(i).item_code;
								document.getElementById("brand").innerHTML = results.rows.item(i).brand;
								document.getElementById("catalogue_name").innerHTML = results.rows.item(i).catalogue_name;
								document.getElementById("category").innerHTML = results.rows.item(i).category;
								document.getElementById("fabric_width").innerHTML = results.rows.item(i).fabric_width;
								document.getElementById("panelheight").innerHTML = results.rows.item(i).panelheight;
								document.getElementById("weight_gramsm2").innerHTML = results.rows.item(i).weight_gramsm2;
								document.getElementById("additional_notes").innerHTML = results.rows.item(i).additional_notes;
								//AED
								document.getElementById("AED_price_per_SQM").innerHTML = results.rows.item(i).AED_price_per_SQM;
								document.getElementById("SALE_AED_price_per_SQM").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
								document.getElementById("AED_Roman_Price_per_SQM").innerHTML = results.rows.item(i).AED_Roman_Price_per_SQM;
								document.getElementById("SALE_AED_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SALE_AED_Roman_Price_per_SQM;
                document.getElementById("AED_stitching_price").innerHTML = results.rows.item(i).AED_stitching_price;
								document.getElementById("SALE_AED_stitching_price").innerHTML = results.rows.item(i).SALE_AED_stitching_price;
								document.getElementById("AED_norm_lining_per_SQM").innerHTML = results.rows.item(i).AED_norm_lining_per_SQM;
								document.getElementById("SALE_AED_norm_lining_per_SQM").innerHTML = results.rows.item(i).SALE_AED_norm_lining_per_SQM;
								document.getElementById("AED_branded_lining_per_SQM").innerHTML = results.rows.item(i).AED_branded_lining_per_SQM;
								document.getElementById("SALE_AED_branded_lining_per_SQM").innerHTML = results.rows.item(i).SALE_AED_branded_lining_per_SQM;
								document.getElementById("AED_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).AED_cataluna_blackout_per_SQM;
								document.getElementById("SALE_AED_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_AED_cataluna_blackout_per_SQM;
								document.getElementById("AED_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).AED_antartica_blackout_per_SQM;
								document.getElementById("SALE_AED_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_AED_antartica_blackout_per_SQM;
								document.getElementById("AED_bateaux_per_SQM").innerHTML = results.rows.item(i).AED_bateaux_per_SQM;
								document.getElementById("SALE_AED_bateaux_per_SQM").innerHTML = results.rows.item(i).SALE_AED_bateaux_per_SQM;
								document.getElementById("AED_plata_per_SQM").innerHTML = results.rows.item(i).AED_plata_per_SQM;
								document.getElementById("SALE_AED_plata_per_SQM").innerHTML = results.rows.item(i).SALE_AED_plata_per_SQM;
								//SAR
								document.getElementById("SAR_price_per_SQM").innerHTML = results.rows.item(i).SAR_price_per_SQM;
								document.getElementById("SALE_SAR_price_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
								document.getElementById("SAR_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SAR_Roman_Price_per_SQM;
								document.getElementById("SALE_SAR_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_Roman_Price_per_SQM;
								document.getElementById("SAR_stitching_price").innerHTML = results.rows.item(i).SAR_stitching_price;
								document.getElementById("SALE_SAR_stitching_price").innerHTML = results.rows.item(i).SALE_SAR_stitching_price;
								document.getElementById("SAR_norm_lining_per_SQM").innerHTML = results.rows.item(i).SAR_norm_lining_per_SQM;
								document.getElementById("SALE_SAR_norm_lining_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_norm_lining_per_SQM;
								document.getElementById("SAR_branded_lining_per_SQM").innerHTML = results.rows.item(i).SAR_branded_lining_per_SQM;
								document.getElementById("SALE_SAR_branded_lining_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_branded_lining_per_SQM;
								document.getElementById("SAR_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SAR_cataluna_blackout_per_SQM;
								document.getElementById("SALE_SAR_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_cataluna_blackout_per_SQM;
								document.getElementById("SAR_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SAR_antartica_blackout_per_SQM;
								document.getElementById("SALE_SAR_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_antartica_blackout_per_SQM;
								document.getElementById("SAR_bateaux_per_SQM").innerHTML = results.rows.item(i).SAR_bateaux_per_SQM;
								document.getElementById("SALE_SAR_bateaux_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_bateaux_per_SQM;
								document.getElementById("SAR_plata_per_SQM").innerHTML = results.rows.item(i).SAR_plata_per_SQM;
								document.getElementById("SALE_SAR_plata_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_plata_per_SQM;
								//QAR
								document.getElementById("QAR_price_per_SQM").innerHTML = results.rows.item(i).QAR_price_per_SQM;
								document.getElementById("SALE_QAR_price_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
								document.getElementById("QAR_Roman_Price_per_SQM").innerHTML = results.rows.item(i).QAR_Roman_Price_per_SQM;
								document.getElementById("SALE_QAR_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_Roman_Price_per_SQM;
								document.getElementById("QAR_stitching_price").innerHTML = results.rows.item(i).QAR_stitching_price;
								document.getElementById("SALE_QAR_stitching_price").innerHTML = results.rows.item(i).SALE_QAR_stitching_price;
								document.getElementById("QAR_norm_lining_per_SQM").innerHTML = results.rows.item(i).QAR_norm_lining_per_SQM;
								document.getElementById("SALE_QAR_norm_lining_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_norm_lining_per_SQM;
								document.getElementById("QAR_branded_lining_per_SQM").innerHTML = results.rows.item(i).QAR_branded_lining_per_SQM;
								document.getElementById("SALE_QAR_branded_lining_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_branded_lining_per_SQM;
								document.getElementById("QAR_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).QAR_cataluna_blackout_per_SQM;
								document.getElementById("SALE_QAR_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_cataluna_blackout_per_SQM;
								document.getElementById("QAR_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).QAR_antartica_blackout_per_SQM;
								document.getElementById("SALE_QAR_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_antartica_blackout_per_SQM;
								document.getElementById("QAR_bateaux_per_SQM").innerHTML = results.rows.item(i).QAR_bateaux_per_SQM;
								document.getElementById("SALE_QAR_bateaux_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_bateaux_per_SQM;
								document.getElementById("QAR_plata_per_SQM").innerHTML = results.rows.item(i).QAR_plata_per_SQM;
								document.getElementById("SALE_QAR_plata_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_plata_per_SQM;
								//OMR
								document.getElementById("OMR_price_per_SQM").innerHTML = results.rows.item(i).OMR_price_per_SQM;
								document.getElementById("SALE_OMR_price_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
								document.getElementById("OMR_Roman_Price_per_SQM").innerHTML = results.rows.item(i).OMR_Roman_Price_per_SQM;
								document.getElementById("SALE_OMR_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_Roman_Price_per_SQM;
								document.getElementById("OMR_stitching_price").innerHTML = results.rows.item(i).OMR_stitching_price;
								document.getElementById("SALE_OMR_stitching_price").innerHTML = results.rows.item(i).SALE_OMR_stitching_price;
								document.getElementById("OMR_norm_lining_per_SQM").innerHTML = results.rows.item(i).OMR_norm_lining_per_SQM;
								document.getElementById("SALE_OMR_norm_lining_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_norm_lining_per_SQM;
								document.getElementById("OMR_branded_lining_per_SQM").innerHTML = results.rows.item(i).OMR_branded_lining_per_SQM;
								document.getElementById("SALE_OMR_branded_lining_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_branded_lining_per_SQM;
								document.getElementById("OMR_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).OMR_cataluna_blackout_per_SQM;
								document.getElementById("SALE_OMR_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_cataluna_blackout_per_SQM;
								document.getElementById("OMR_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).OMR_antartica_blackout_per_SQM;
								document.getElementById("SALE_OMR_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_antartica_blackout_per_SQM;
								document.getElementById("OMR_bateaux_per_SQM").innerHTML = results.rows.item(i).OMR_bateaux_per_SQM;
								document.getElementById("SALE_OMR_bateaux_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_bateaux_per_SQM;
								document.getElementById("OMR_plata_per_SQM").innerHTML = results.rows.item(i).OMR_plata_per_SQM;
								document.getElementById("SALE_OMR_plata_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_plata_per_SQM;
								
								//BHD
								document.getElementById("BHD_price_per_SQM").innerHTML = results.rows.item(i).BHD_price_per_SQM;
								document.getElementById("SALE_BHD_price_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
								document.getElementById("BHD_Roman_Price_per_SQM").innerHTML = results.rows.item(i).BHD_Roman_Price_per_SQM;
								document.getElementById("SALE_BHD_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_Roman_Price_per_SQM;
								document.getElementById("BHD_stitching_price").innerHTML = results.rows.item(i).BHD_stitching_price;
								document.getElementById("SALE_BHD_stitching_price").innerHTML = results.rows.item(i).SALE_BHD_stitching_price;
								document.getElementById("BHD_norm_lining_per_SQM").innerHTML = results.rows.item(i).BHD_norm_lining_per_SQM;
								document.getElementById("SALE_BHD_norm_lining_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_norm_lining_per_SQM;
								document.getElementById("BHD_branded_lining_per_SQM").innerHTML = results.rows.item(i).BHD_branded_lining_per_SQM;
								document.getElementById("SALE_BHD_branded_lining_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_branded_lining_per_SQM;
								document.getElementById("BHD_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).BHD_cataluna_blackout_per_SQM;
								document.getElementById("SALE_BHD_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_cataluna_blackout_per_SQM;
								document.getElementById("BHD_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).BHD_antartica_blackout_per_SQM;
								document.getElementById("SALE_BHD_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_antartica_blackout_per_SQM;
								document.getElementById("BHD_bateaux_per_SQM").innerHTML = results.rows.item(i).BHD_bateaux_per_SQM;
								document.getElementById("SALE_BHD_bateaux_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_bateaux_per_SQM;
								document.getElementById("BHD_plata_per_SQM").innerHTML = results.rows.item(i).BHD_plata_per_SQM;
								document.getElementById("SALE_BHD_plata_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_plata_per_SQM;
								
								//all currency
								
								//AED
								document.getElementById("AED_price_per_SQM1").innerHTML = results.rows.item(i).AED_price_per_SQM;
								document.getElementById("SALE_AED_price_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
								document.getElementById("AED_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).AED_Roman_Price_per_SQM;
								document.getElementById("SALE_AED_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_Roman_Price_per_SQM;
								document.getElementById("AED_stitching_price1").innerHTML = results.rows.item(i).AED_stitching_price;
                document.getElementById("SALE_AED_stitching_price1").innerHTML = results.rows.item(i).SALE_AED_stitching_price;
								document.getElementById("AED_norm_lining_per_SQM1").innerHTML = results.rows.item(i).AED_norm_lining_per_SQM;
								document.getElementById("SALE_AED_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_norm_lining_per_SQM;
								document.getElementById("AED_branded_lining_per_SQM1").innerHTML = results.rows.item(i).AED_branded_lining_per_SQM;
								document.getElementById("SALE_AED_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_branded_lining_per_SQM;
								document.getElementById("AED_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).AED_cataluna_blackout_per_SQM;
								document.getElementById("SALE_AED_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_cataluna_blackout_per_SQM;
								document.getElementById("AED_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).AED_antartica_blackout_per_SQM;
								document.getElementById("SALE_AED_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_antartica_blackout_per_SQM;
								document.getElementById("AED_bateaux_per_SQM1").innerHTML = results.rows.item(i).AED_bateaux_per_SQM;
								document.getElementById("SALE_AED_bateaux_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_bateaux_per_SQM;
								document.getElementById("AED_plata_per_SQM1").innerHTML = results.rows.item(i).AED_plata_per_SQM;
								document.getElementById("SALE_AED_plata_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_plata_per_SQM;
								//SAR
								document.getElementById("SAR_price_per_SQM1").innerHTML = results.rows.item(i).SAR_price_per_SQM;
								document.getElementById("SALE_SAR_price_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
								document.getElementById("SAR_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SAR_Roman_Price_per_SQM;
								document.getElementById("SALE_SAR_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_Roman_Price_per_SQM;
								document.getElementById("SAR_stitching_price1").innerHTML = results.rows.item(i).SAR_stitching_price;
								document.getElementById("SALE_SAR_stitching_price1").innerHTML = results.rows.item(i).SALE_SAR_stitching_price;
								document.getElementById("SAR_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SAR_norm_lining_per_SQM;
								document.getElementById("SALE_SAR_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_norm_lining_per_SQM;
								document.getElementById("SAR_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SAR_branded_lining_per_SQM;
								document.getElementById("SALE_SAR_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_branded_lining_per_SQM;
								document.getElementById("SAR_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SAR_cataluna_blackout_per_SQM;
								document.getElementById("SALE_SAR_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_cataluna_blackout_per_SQM;
								document.getElementById("SAR_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SAR_antartica_blackout_per_SQM;
								document.getElementById("SALE_SAR_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_antartica_blackout_per_SQM;
								document.getElementById("SAR_bateaux_per_SQM1").innerHTML = results.rows.item(i).SAR_bateaux_per_SQM;
								document.getElementById("SALE_SAR_bateaux_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_bateaux_per_SQM;
								document.getElementById("SAR_plata_per_SQM1").innerHTML = results.rows.item(i).SAR_plata_per_SQM;
								document.getElementById("SALE_SAR_plata_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_plata_per_SQM;
								//OMR
								document.getElementById("OMR_price_per_SQM1").innerHTML = results.rows.item(i).OMR_price_per_SQM;
								document.getElementById("SALE_OMR_price_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
								document.getElementById("OMR_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).OMR_Roman_Price_per_SQM;
								document.getElementById("SALE_OMR_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_Roman_Price_per_SQM;
								document.getElementById("OMR_stitching_price1").innerHTML = results.rows.item(i).OMR_stitching_price;
								document.getElementById("SALE_OMR_stitching_price1").innerHTML = results.rows.item(i).SALE_OMR_stitching_price;
								document.getElementById("OMR_norm_lining_per_SQM1").innerHTML = results.rows.item(i).OMR_norm_lining_per_SQM;
								document.getElementById("SALE_OMR_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_norm_lining_per_SQM;
								document.getElementById("OMR_branded_lining_per_SQM1").innerHTML = results.rows.item(i).OMR_branded_lining_per_SQM;
								document.getElementById("SALE_OMR_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_branded_lining_per_SQM;
								document.getElementById("OMR_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).OMR_cataluna_blackout_per_SQM;
								document.getElementById("SALE_OMR_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_cataluna_blackout_per_SQM;
								document.getElementById("OMR_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).OMR_antartica_blackout_per_SQM;
								document.getElementById("SALE_OMR_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_antartica_blackout_per_SQM;
								document.getElementById("OMR_bateaux_per_SQM1").innerHTML = results.rows.item(i).OMR_bateaux_per_SQM;
								document.getElementById("SALE_OMR_bateaux_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_bateaux_per_SQM;
								document.getElementById("OMR_plata_per_SQM1").innerHTML = results.rows.item(i).OMR_plata_per_SQM;
								document.getElementById("SALE_OMR_plata_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_plata_per_SQM;
								
								//BHD
								document.getElementById("BHD_price_per_SQM1").innerHTML = results.rows.item(i).BHD_price_per_SQM;
								document.getElementById("SALE_BHD_price_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
								document.getElementById("BHD_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).BHD_Roman_Price_per_SQM;
								document.getElementById("SALE_BHD_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_Roman_Price_per_SQM;
								document.getElementById("BHD_stitching_price1").innerHTML = results.rows.item(i).BHD_stitching_price;
								document.getElementById("SALE_BHD_stitching_price1").innerHTML = results.rows.item(i).SALE_BHD_stitching_price;
								document.getElementById("BHD_norm_lining_per_SQM1").innerHTML = results.rows.item(i).BHD_norm_lining_per_SQM;
								document.getElementById("SALE_BHD_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_norm_lining_per_SQM;
								document.getElementById("BHD_branded_lining_per_SQM1").innerHTML = results.rows.item(i).BHD_branded_lining_per_SQM;
								document.getElementById("SALE_BHD_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_branded_lining_per_SQM;
								document.getElementById("BHD_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).BHD_cataluna_blackout_per_SQM;
								document.getElementById("SALE_BHD_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_cataluna_blackout_per_SQM;
								document.getElementById("BHD_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).BHD_antartica_blackout_per_SQM;
								document.getElementById("SALE_BHD_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_antartica_blackout_per_SQM;
								document.getElementById("BHD_bateaux_per_SQM1").innerHTML = results.rows.item(i).BHD_bateaux_per_SQM;
								document.getElementById("SALE_BHD_bateaux_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_bateaux_per_SQM;
								document.getElementById("BHD_plata_per_SQM1").innerHTML = results.rows.item(i).BHD_plata_per_SQM;
								document.getElementById("SALE_BHD_plata_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_plata_per_SQM;
								
								//QAR
								document.getElementById("QAR_price_per_SQM1").innerHTML = results.rows.item(i).QAR_price_per_SQM;
								document.getElementById("SALE_QAR_price_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
								document.getElementById("QAR_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).QAR_Roman_Price_per_SQM;
								document.getElementById("SALE_QAR_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_Roman_Price_per_SQM;
								document.getElementById("QAR_stitching_price1").innerHTML = results.rows.item(i).QAR_stitching_price;
								document.getElementById("SALE_QAR_stitching_price1").innerHTML = results.rows.item(i).SALE_QAR_stitching_price;
								document.getElementById("QAR_norm_lining_per_SQM1").innerHTML = results.rows.item(i).QAR_norm_lining_per_SQM;
								document.getElementById("SALE_QAR_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_norm_lining_per_SQM;
								document.getElementById("QAR_branded_lining_per_SQM1").innerHTML = results.rows.item(i).QAR_branded_lining_per_SQM;
								document.getElementById("SALE_QAR_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_branded_lining_per_SQM;
								document.getElementById("QAR_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).QAR_cataluna_blackout_per_SQM;
								document.getElementById("SALE_QAR_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_cataluna_blackout_per_SQM;
								document.getElementById("QAR_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).QAR_antartica_blackout_per_SQM;
								document.getElementById("SALE_QAR_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_antartica_blackout_per_SQM;
								document.getElementById("QAR_bateaux_per_SQM1").innerHTML = results.rows.item(i).QAR_bateaux_per_SQM;
								document.getElementById("SALE_QAR_bateaux_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_bateaux_per_SQM;
								document.getElementById("QAR_plata_per_SQM1").innerHTML = results.rows.item(i).QAR_plata_per_SQM;
								document.getElementById("SALE_QAR_plata_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_plata_per_SQM;
						}
				}
				// Transaction success callback
				function successCB() {
						var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100 * 1024 * 1024);
						db.transaction(queryDB, errorCB);
				}
				// PhoneGap is ready
				function onDeviceReady() {
						var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100 * 1024 * 1024);
						db.transaction(successCB, errorCB);
				}
				function errorCB(err) {
				//	alert('errror');
				 //   alert("Error processing SQL: "+err.code);
				}
				//fabric seperation
				var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100 * 1024 * 1024);
				db.transaction(function (tx){
						tx.executeSql('SELECT * FROM productlist where item_code = ? collate NOCASE', [QRcode], function (tx, results) {
								var len = results.rows.length;
								var fabric = results.rows.item(0).fabric;
								var result=fabric.split(':');
								fb_key = result[0];
								fb_percentage = result[1];
								arr_fb_key = fb_key.split(',');
								arr_fb_percentage = fb_percentage.split(',');
								key_length = arr_fb_key.length;
								var i=0;
								while (i<key_length) {
										fab_key = arr_fb_key[i];
										tx.executeSql('SELECT * FROM fabrics where id = ?',[fab_key], function (tx, results1) {
												fabric_name = results1.rows.item(0).fabric_name;
												fabric_key = results1.rows.item(0).id;
												document.getElementById(fabric_key).innerHTML = fabric_name;
										});
										var newrow='<tr><td id='+fab_key+'></td><td data-title="" >'+arr_fb_percentage[i]+'%</td></tr>';
										$('#fabric_add > tbody > tr:last').after(newrow);
										i++;
								}
						});
				});
				db.transaction(function (tx){
						tx.executeSql('SELECT * FROM productlist where item_code = ? collate NOCASE', [QRcode], function (tx, results) {
								var product_possible = results.rows.item(0).product_possible;
								arr_pro_key = product_possible.split(',');
								var len = arr_pro_key.length;
								for(var i=0;i<len;i++){
										pro_key = arr_pro_key[i];
										tx.executeSql('SELECT * FROM products_possible where pos_pdt_id = ?',[pro_key], function (tx, results) {
												product_pos_name = results.rows.item(0).pos_pdt_name;
												var newrow1 = '<tr><td data-title="">'+product_pos_name+'</td></tr>';
												$('#product_pos_add > tbody > tr:last').after(newrow1);
										});
								}
						});
				});
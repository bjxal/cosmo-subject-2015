/*global $, jQuery, document*/
$(document).ready(function () {
    var data =
		[
            {"index":"0","name":"正门","data":"10011007131121141740700","bg_text":"images/bg_text/bg_text_1.png","bg_text_big":"images/bg_text/bg_text_big_1.png","thumbnail":"data/photo/img0006[126PX] (3).jpg","thumbnail_indicator":"data/poi/taihemen_indicator.png","point_image":"img/point.png","x_wap_ration":"0.568","y_wap_ration":"0.78067460317460314","region_image":"data/poi/taihemen_region.png","region_image_width":"192","region_image_height":"128","x_region_wap_ration":"0.84375","y_region_wap_ration":"0.86567460317460314","x_pc_ration":"0.84375","y_pc_ration":"0.86567460317460314","x_region_pc_ration":"0.84375","y_region_pc_ration":"0.86567460317460314"},
            {"index":"1","name":"头宫门","data":"10011007131121141739000","bg_text":"images/bg_text/bg_text_2.png","bg_text_big":"images/bg_text/bg_text_big_2.png","thumbnail":"data/photo/img0055[126PX].jpg","thumbnail_indicator":"data/poi/taihemen_indicator.png","point_image":"img/point.png","x_wap_ration":"0.53","y_wap_ration":"0.709","region_image":"data/poi/taihemen_region.png","region_image_width":"192","region_image_height":"128","x_region_wap_ration":"0.34375","y_region_wap_ration":"0.66567460317460314","x_pc_ration":"0.50099800399201599","y_pc_ration":"0.80925925925925923","x_region_pc_ration":"0.44311377245508982","y_region_pc_ration":"0.78703703703703709"},
            {"index":"2","name":"茗园","data":"10011007131121141805900","bg_text":"images/bg_text/bg_text_3.png","bg_text_big":"images/bg_text/bg_text_big_3.png","thumbnail":"data/photo/img0012[126PX] (1).jpg","thumbnail_indicator":"data/poi/taihemen_indicator.png","point_image":"img/point.png","x_wap_ration":"0.338","y_wap_ration":"0.74","region_image":"data/poi/taihemen_region.png","region_image_width":"192","region_image_height":"128","x_region_wap_ration":"0.34375","y_region_wap_ration":"0.66567460317460314","x_pc_ration":"0.44311377245508982","y_pc_ration":"0.87037037037037035","x_region_pc_ration":"0.44311377245508982","y_region_pc_ration":"0.78703703703703709"},
            {"index":"3","name":"二宫门","data":"10013XTY1405190SCENE003","bg_text":"images/bg_text/bg_text_4.png","bg_text_big":"images/bg_text/bg_text_big_4.png","thumbnail":"data/photo/img0028[126PX].jpg","thumbnail_indicator":"data/poi/taihemen_indicator.png","point_image":"img/point.png","x_wap_ration":"0.50","y_wap_ration":"0.636","region_image":"data/poi/taihemen_region.png","region_image_width":"192","region_image_height":"128","x_region_wap_ration":"0.34375","y_region_wap_ration":"0.66567460317460314","x_pc_ration":"0.56087824351297411","y_pc_ration":"0.87037037037037035","x_region_pc_ration":"0.44311377245508982","y_region_pc_ration":"0.78703703703703709"},
            {"index":"4","name":"雅园","data":"245d4e90818922fe55a1b54c34fbc9dd","bg_text":"images/bg_text/bg_text_5.png","bg_text_big":"images/bg_text/bg_text_big_5.png","thumbnail":"data/photo/img0010[126PX].jpg","thumbnail_indicator":"data/poi/sandadian_indicator.png","point_image":"img/point.png","x_wap_ration":"0.338","y_wap_ration":"0.680675","region_image":"data/poi/sandadian_region.png","region_image_width":"192","region_image_height":"312","x_region_wap_ration":"0.34375","y_region_wap_ration":"0.36706349206349204","x_pc_ration":"0.50099800399201599","y_pc_ration":"0.63888888888888884","x_region_pc_ration":"0.44311377245508982","y_region_pc_ration":"0.42037037037037039"},
            {"index":"5","name":"磐余斋","data":"4a262b1699ef954eb09210f21f2ff51b","bg_text":"images/bg_text/bg_text_6.png","bg_text_big":"images/bg_text/bg_text_big_6.png","thumbnail":"data/photo/img0005[126PX] (1).jpg","thumbnail_indicator":"data/poi/sandadian_indicator.png","point_image":"img/point.png","x_wap_ration":"0.38249999999999999","y_wap_ration":"0.69920634920634919","region_image":"data/poi/sandadian_region.png","region_image_width":"192","region_image_height":"312","x_region_wap_ration":"0.34375","y_region_wap_ration":"0.36706349206349204","x_pc_ration":"0.44510978043912175","y_pc_ration":"0.71481481481481479","x_region_pc_ration":"0.44311377245508982","y_region_pc_ration":"0.42037037037037039"},
            {"index":"6","name":"趣园","data":"5f7fb332a0cca34662436dc7ad32e0cf","bg_text":"images/bg_text/bg_text_7.png","bg_text_big":"images/bg_text/bg_text_big_7.png","thumbnail":"data/photo/img0012[126PX].jpg","thumbnail_indicator":"data/poi/sandadian_indicator.png","point_image":"img/point.png","x_wap_ration":"0.76218750000000002","y_wap_ration":"0.67920634920634919","region_image":"data/poi/sandadian_region.png","region_image_width":"192","region_image_height":"312","x_region_wap_ration":"0.34375","y_region_wap_ration":"0.36706349206349204","x_pc_ration":"0.56087824351297411","y_pc_ration":"0.71481481481481479","x_region_pc_ration":"0.44311377245508982","y_region_pc_ration":"0.42037037037037039"},
            {"index":"7","name":"银安殿","data":"10013XTY1405190SCENE004","bg_text":"images/bg_text/bg_text_8.png","bg_text_big":"images/bg_text/bg_text_big_8.png","thumbnail":"data/photo/img0010[126PX] (1).jpg","thumbnail_indicator":"data/poi/sandadian_indicator.png","point_image":"img/point.png","x_wap_ration":"0.54","y_wap_ration":"0.56908730158730157","region_image":"data/poi/sandadian_region.png","region_image_width":"192","region_image_height":"312","x_region_wap_ration":"0.34375","y_region_wap_ration":"0.36706349206349204","x_pc_ration":"0.50199600798403199","y_pc_ration":"0.57407407407407407","x_region_pc_ration":"0.44311377245508982","y_region_pc_ration":"0.42037037037037039"},
            {"index":"8","name":"葆光室","data":"10011029131223122255700","bg_text":"images/bg_text/bg_text_9.png","bg_text_big":"images/bg_text/bg_text_big_9.png","thumbnail":"data/photo/img0007[126PX] (2).jpg","thumbnail_indicator":"data/poi/sandadian_indicator.png","point_image":"img/point.png","x_wap_ration":"0.335","y_wap_ration":"0.57246031746031744","region_image":"data/poi/sandadian_region.png","region_image_width":"192","region_image_height":"312","x_region_wap_ration":"0.34375","y_region_wap_ration":"0.36706349206349204","x_pc_ration":"0.50099800399201599","y_pc_ration":"0.52037037037037037","x_region_pc_ration":"0.44311377245508982","y_region_pc_ration":"0.42037037037037039"},
            {"index":"9","name":"多福轩","data":"","bg_text":"images/bg_text/bg_text_10.png","bg_text_big":"images/bg_text/bg_text_big_10.png","thumbnail":"data/photo/img0002[126PX].jpg","thumbnail_indicator":"data/poi/housangong_indicator.png","point_image":"img/point.png","x_wap_ration":"0.762","y_wap_ration":"0.5711111111111111","region_image":"data/poi/housangong_region.png","region_image_width":"112","region_image_height":"208","x_region_wap_ration":"0.40937499999999999","y_region_wap_ration":"0.1498015873015873","x_pc_ration":"0.50099800399201599","y_pc_ration":"0.42407407407407405","x_region_pc_ration":"0.4710578842313694","y_region_pc_ration":"0.1648148148148148"},
            {"index":"10","name":"嘉乐堂","data":"10013XTY1405190SCENE005","bg_text":"images/bg_text/bg_text_11.png","bg_text_big":"images/bg_text/bg_text_big_11.png","thumbnail":"data/photo/img0010[126PX] (2).jpg","thumbnail_indicator":"data/poi/housangong_indicator.png","point_image":"img/point.png","x_wap_ration":"0.535","y_wap_ration":"0.48981746031746029","region_image":"data/poi/housangong_region.png","region_image_width":"112","region_image_height":"208","x_region_wap_ration":"0.40937499999999999","y_region_wap_ration":"0.1498015873015873","x_pc_ration":"0.50099800399201599","y_pc_ration":"0.30740740740740741","x_region_pc_ration":"0.47105788423153694","y_region_pc_ration":"0.1648148148148148"},
            {"index":"11","name":"锡晋斋","data":"10013XTY1405190SCENE006","bg_text":"images/bg_text/bg_text_12.png","bg_text_big":"images/bg_text/bg_text_big_12.png","thumbnail":"data/photo/img0008[126PX].jpg","thumbnail_indicator":"data/poi/housangong_indicator.png","point_image":"img/point.png","x_wap_ration":"0.334","y_wap_ration":"0.48617","region_image":"data/poi/housangong_region.png","region_image_width":"112","region_image_height":"208","x_region_wap_ration":"0.40937499999999999","y_region_wap_ration":"0.1498015873015873","x_pc_ration":"0.50099800399201599","y_pc_ration":"0.26111111111111113","x_region_pc_ration":"0.47105788423153694","y_region_pc_ration":"0.1648148148148148"},
            {"index":"12","name":"乐道堂","data":"10013XTY1405190SCENE006","bg_text":"images/bg_text/bg_text_13.png","bg_text_big":"images/bg_text/bg_text_big_13.png","thumbnail":"data/photo/img0002[126PX] (1).jpg","thumbnail_indicator":"data/poi/housangong_indicator.png","point_image":"img/point.png","x_wap_ration":"0.7693","y_wap_ration":"0.486817","region_image":"data/poi/housangong_region.png","region_image_width":"112","region_image_height":"208","x_region_wap_ration":"0.40937499999999999","y_region_wap_ration":"0.1498015873015873","x_pc_ration":"0.50099800399201599","y_pc_ration":"0.21666666666666667","x_region_pc_ration":"0.47105788423153694","y_region_pc_ration":"0.1648148148148148"},
            {"index":"13","name":"佛楼","data":"10013XTY1405190SCENE006","bg_text":"images/bg_text/bg_text_14.png","bg_text_big":"images/bg_text/bg_text_big_14.png","thumbnail":"data/photo/img0027[126PX].jpg","thumbnail_indicator":"data/poi/housangong_indicator.png","point_image":"img/point.png","x_wap_ration":"0.53","y_wap_ration":"0.435354","region_image":"data/poi/housangong_region.png","region_image_width":"112","region_image_height":"208","x_region_wap_ration":"0.40937499999999999","y_region_wap_ration":"0.1498015873015873","x_pc_ration":"0.50099800399201599","y_pc_ration":"0.17037037037037037","x_region_pc_ration":"0.47105788423153694","y_region_pc_ration":"0.1648148148148148"},
            {"index":"14","name":"西洋门","data":"10013XTY1405190SCENE008","bg_text":"images/bg_text/bg_text_15.png","bg_text_big":"images/bg_text/bg_text_big_15.png","thumbnail":"data/photo/img0007[126PX] (4).jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.53","y_wap_ration":"0.39293650793650794","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.50099800399201599","y_pc_ration":"0.12037037037037036","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"15","name":"龙王庙","data":"10011013150417145146700","bg_text":"images/bg_text/bg_text_16.png","bg_text_big":"images/bg_text/bg_text_big_16.png","thumbnail":"data/photo/img0002[126PX] (3).jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.29","y_wap_ration":"0.39706349206349206","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.50099800399201599","y_pc_ration":"0.12037037037037036","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"16","name":"山神庙","data":"10011041130430145129600","bg_text":"images/bg_text/bg_text_17.png","bg_text_big":"images/bg_text/bg_text_big_17.png","thumbnail":"data/photo/img0004[126PX] (1).jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.435","y_wap_ration":"0.38931746031746032","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.50099800399201599","y_pc_ration":"0.092592592592592587","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"17","name":"榆关","data":"10013XTY1405190SCENE006","bg_text":"images/bg_text/bg_text_18.png","bg_text_big":"images/bg_text/bg_text_big_18.png","thumbnail":"data/photo/img0006[126PX] (1).jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.34825","y_wap_ration":"0.396119","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.47405189620758481","y_pc_ration":"0.11666666666666667","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"18","name":"妙香亭","data":"10013XTY1405190SCENE006","bg_text":"images/bg_text/bg_text_19.png","bg_text_big":"images/bg_text/bg_text_big_19.png","thumbnail":"data/photo/img0004[126PX] (2).jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.411813","y_wap_ration":"0.35","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.47405189620758481","y_pc_ration":"0.090740740740740747","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"19","name":"益智斋","data":"10011029131223122319200","bg_text":"images/bg_text/bg_text_20.png","bg_text_big":"images/bg_text/bg_text_big_20.png","thumbnail":"data/photo/img0006[126PX] (2).jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.251563","y_wap_ration":"0.3484048","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.47205588822355288","y_pc_ration":"0.07407407407407407","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"20","name":"独乐峰","data":"10013XTY1405190SCENE009","bg_text":"images/bg_text/bg_text_21.png","bg_text_big":"images/bg_text/bg_text_big_21.png","thumbnail":"data/photo/img0006[126PX].jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.53656249999999998","y_wap_ration":"0.33492063492063491","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.53293413173652693","y_pc_ration":"0.15185185185185185","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"21","name":"沁秋亭","data":"10013XTY1405190SCENE010","bg_text":"images/bg_text/bg_text_22.png","bg_text_big":"images/bg_text/bg_text_big_22.png","thumbnail":"data/photo/img0006[126PX] (1).jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.62274999999999998","y_wap_ration":"0.32011904761904762","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.53093812375249505","y_pc_ration":"0.1111111111111111","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"22","name":"蓺蔬圃","data":"10013XTY1405190SCENE006","bg_text":"images/bg_text/bg_text_23.png","bg_text_big":"images/bg_text/bg_text_big_23.png","thumbnail":"data/photo/img0008[126PX] (3).jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.73718749999999996","y_wap_ration":"0.357301587301587297","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.53093812375249505","y_pc_ration":"0.087037037037037038","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"23","name":"蝠池","data":"10013XTY1405190SCENE006","bg_text":"images/bg_text/bg_text_24.png","bg_text_big":"images/bg_text/bg_text_big_24.png","thumbnail":"data/photo/img0009[126PX] (1).jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.54562500000000004","y_wap_ration":"0.264404761904761904","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.53193612774451093","y_pc_ration":"0.072222222222222215","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"24","name":"安善堂","data":"10011002120223120118981","bg_text":"images/bg_text/bg_text_25.png","bg_text_big":"images/bg_text/bg_text_big_25.png","thumbnail":"data/photo/img0002[126PX] (2).jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.53475000000000004","y_wap_ration":"0.196404761904761904","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.51796407185628746","y_pc_ration":"0.07407407407407407","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"25","name":"牡丹园","data":"ec2cf13a84b82609cbd4d082dc94eed9","bg_text":"images/bg_text/bg_text_26.png","bg_text_big":"images/bg_text/bg_text_big_26.png","thumbnail":"data/photo/img0009[126PX] (2).jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.66975000000000004","y_wap_ration":"0.199404761904761904","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.51796407185628746","y_pc_ration":"0.07407407407407407","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"26","name":"湖心亭","data":"10013XTY1405190SCENE017","bg_text":"images/bg_text/bg_text_27.png","bg_text_big":"images/bg_text/bg_text_big_27.png","thumbnail":"data/photo/img0005[126PX] (4).jpg","thumbnail_indicator":"data/poi/yuhuayuan_indicator.png","point_image":"img/point.png","x_wap_ration":"0.294","y_wap_ration":"0.244452380952380959","region_image":"data/poi/yuhuayuan_region.png","region_image_width":"126","region_image_height":"78","x_region_wap_ration":"0.40156249999999999","y_region_wap_ration":"0.070436507936507936","x_pc_ration":"0.50099800399201599","y_pc_ration":"0.062962962962962957","x_region_pc_ration":"0.46107784431137727","y_region_pc_ration":"0.064814814814814811"},
            {"index":"27","name":"福字碑","data":"10011002120223120834473","bg_text":"images/bg_text/bg_text_28.png","bg_text_big":"images/bg_text/bg_text_big_28.png","thumbnail":"data/photo/img0007[126PX] (1).jpg","thumbnail_indicator":"data/poi/wuyingdian_indicator.png","point_image":"img/point.png","x_wap_ration":"0.55343750000000001","y_wap_ration":"0.15269841269841268","region_image":"data/poi/wuyingdian_region.png","region_image_width":"70","region_image_height":"80","x_region_wap_ration":"0.171875","y_region_wap_ration":"0.63293650793650791","x_pc_ration":"0.38722554890219563","y_pc_ration":"0.7944444444444444","x_region_pc_ration":"0.36427145708582837","y_region_pc_ration":"0.76111111111111107"},
            {"index":"28","name":"邀月台","data":"10011002120223120834473","bg_text":"images/bg_text/bg_text_29.png","bg_text_big":"images/bg_text/bg_text_big_29.png","thumbnail":"data/photo/img0007[126PX] (1).jpg","thumbnail_indicator":"data/poi/wuyingdian_indicator.png","point_image":"img/point.png","x_wap_ration":"0.53343750000000001","y_wap_ration":"0.10588095238095233","region_image":"data/poi/wuyingdian_region.png","region_image_width":"70","region_image_height":"80","x_region_wap_ration":"0.171875","y_region_wap_ration":"0.63293650793650791","x_pc_ration":"0.38722554890219563","y_pc_ration":"0.76296296296296295","x_region_pc_ration":"0.36427145708582837","y_region_pc_ration":"0.76111111111111107"},
            {"index":"29","name":"滴翠岩","data":"10011002120223120835908","bg_text":"images/bg_text/bg_text_30.png","bg_text_big":"images/bg_text/bg_text_big_30.png","thumbnail":"data/photo/img0004[126PX].jpg","thumbnail_indicator":"data/poi/wenhuadian_indicator.png","point_image":"img/point.png","x_wap_ration":"0.614375","y_wap_ration":"0.12757936507936511","region_image":"data/poi/wenhuadian_region.png","region_image_width":"56","region_image_height":"64","x_region_wap_ration":"0.69218749999999996","y_region_wap_ration":"0.6517857142857143","x_pc_ration":"0.60179640718562877","y_pc_ration":"0.79259259259259263","x_region_pc_ration":"0.58383233532934131","y_region_pc_ration":"0.76481481481481484"},
            {"index":"30","name":"澄怀撷秀","data":"10011002120223120842678","bg_text":"images/bg_text/bg_text_31.png","bg_text_big":"images/bg_text/bg_text_big_31.png","thumbnail":"data/photo/img0004[126PX].jpg","thumbnail_indicator":"data/poi/wenhuadian_indicator.png","point_image":"img/point.png","x_wap_ration":"0.323375","y_wap_ration":"0.16288888888888884","region_image":"data/poi/wenhuadian_region.png","region_image_width":"56","region_image_height":"64","x_region_wap_ration":"0.69218749999999996","y_region_wap_ration":"0.6517857142857143","x_pc_ration":"0.60179640718562877","y_pc_ration":"0.76666666666666672","x_region_pc_ration":"0.58383233532934131","y_region_pc_ration":"0.76481481481481484"},
            {"index":"31","name":"蝠厅","data":"10011002120223120834473","bg_text":"images/bg_text/bg_text_32.png","bg_text_big":"images/bg_text/bg_text_big_32.png","thumbnail":"data/photo/img0004[126PX].jpg","thumbnail_indicator":"data/poi/wenhuadian_indicator.png","point_image":"img/point.png","x_wap_ration":"0.53337499999999998","y_wap_ration":"0.5552380952380953","region_image":"data/poi/wenhuadian_region.png","region_image_width":"56","region_image_height":"64","x_region_wap_ration":"0.69218749999999996","y_region_wap_ration":"0.6517857142857143","x_pc_ration":"0.5858283433133733","y_pc_ration":"0.81851851851851853","x_region_pc_ration":"0.58383233532934131","y_region_pc_ration":"0.76481481481481484"},
            {"index":"32","name":"梧桐院","data":"10011002120223120831649","bg_text":"images/bg_text/bg_text_33.png","bg_text_big":"images/bg_text/bg_text_big_33.png","thumbnail":"data/photo/img0004[126PX].jpg","thumbnail_indicator":"data/poi/wenhuadian_indicator.png","point_image":"img/point.png","x_wap_ration":"0.7178125","y_wap_ration":"0.05152380952380953","region_image":"data/poi/wenhuadian_region.png","region_image_width":"56","region_image_height":"64","x_region_wap_ration":"0.69218749999999996","y_region_wap_ration":"0.6517857142857143","x_pc_ration":"0.61576846307385225","y_pc_ration":"0.81851851851851853","x_region_pc_ration":"0.58383233532934131","y_region_pc_ration":"0.76481481481481484"}
        ],
		imp = [],
    	impHtml = [],
        scroll = [],
        pointArea = [],
        regionArea = [],
        mainContentWidth = $('#mainContent').width(),
        mainContentHeight = $('#mainContent').height(),
        screenWidth = window.screen.width,
        screenHeight = window.screen.height;
    function scrollTOPoi (i) {
    	$('#pointArea').children('div').stop().fadeOut('fast').eq(i).fadeIn('fast');
        $('#regionArea').children('div').stop().fadeOut('fast').eq(i).fadeIn('fast');
        // $('.indicator-wrap').removeClass("toppic");
        var wrapHeight = $('.thumbnail-wrap').eq(i).find('img').height(),
            wrapWidth = $('.thumbnail-wrap').eq(i).find('img').width(),
            /*indicatorWidth = $('.indicator-wrap').find('img').eq(i).width(),
            regionWidth = $('.region-wrap').find('img').eq(i).width(),
            regionHeight = $('.region-wrap').find('img').eq(i).height(),*/
            pointHeight = $('.point-wrap').eq(i).find('img').height(),
            pointWidth = $('.point-wrap').eq(i).find('img').width();
            console.log(pointWidth, wrapWidth);
        if (wrapHeight > $('.region-area').eq(i).offset().top) {
            $('.thumbnail-wrap').eq(i).css({'top': (20),'margin-left':(pointWidth-wrapWidth)/2});
            /*$('.indicator-wrap').eq(i).css({
                'left': regionWidth / 2,
                'margin-left': -(indicatorWidth / 2),
                'top': regionHeight
            });*/
            /*$('.indicator-wrap').eq(i).addClass("toppic");*/
        } else {
            $('.thumbnail-wrap').eq(i).css({'top': -(wrapHeight+3),'margin-left':(pointWidth-wrapWidth)/2});
            /*$('.indicator-wrap').eq(i).css({
                'left': regionWidth / 2,
                'margin-left': -(indicatorWidth / 2)
            });*/
        }
        $('#scroller').find('img').eq(i).attr('src', 'images/bg_text/bg_text_big_' + (i + 1) + '.png');
    	$('#viewLink').find('a').attr('href', 'view.html?region='+data[i].data);
    }
    /*重要景点 Start*/
    //先储存重要景点信息
    //imp.push(data[4]);
    //imp.push(data[7]);
    //imp.push(data[8]);
    //imp.push(data[10]);
    //imp.push(data[11]);
    //imp.push(data[12]);
    //imp.push(data[14]);
    //遍历循环列表添加标注
    $.each(imp, function (i, n) {
        var pointLeft = n.x_wap_ration * 100,
            pointTop = n.y_wap_ration * 100,
            pointAreaHtml = [
                '<div class="important-area" style="left:' + pointLeft + '%; top: ' + pointTop + '%">',
                '<a name="view-important" data-index="'+ n.index +'" href="javascript:;"><img style="width:8px; height:8px" src="' + n.point_image + '" alt="' + n.name + '"></a>',
                '</div>'
            ].join('');
        impHtml.push(pointAreaHtml);
    });
    $('#importantArea').html(impHtml.join(''));
    /*重要景点 End*/

    /*单个景点 Start*/
    $.each(data, function (i, n) {
        var pointLeft = n.x_wap_ration * 100,
            pointTop = n.y_wap_ration * 100,
            regionLeft = n.x_region_wap_ration * 100,
            regionTop = n.y_region_wap_ration * 100,
            imgCls = n.point_image,
            //<a href="view.html?region='+n.data+'&v_index='+i+'"><img src="' + n.thumbnail + '" alt="' + n.name + '"></a>
            pointAreaHtml = [
                '<div class="point-area" style="left:' + pointLeft + '%; top: ' + pointTop + '%">',
                '<div class="thumbnail-wrap"></div>',
                '<div class="point-wrap"><a href="view.html?region='+n.data+'&v_index='+i+'"><img style="width:8px; height:8px" src="' + n.point_image + '" alt="' + n.name + '"></div>',
                '</div>'
            ].join(''),
            regionAreaHtml = [
                '<div class="region-area" style="left:' + regionLeft + '%; top: ' + regionTop + '%">',
                '<div class="region">',
               // '<div class="indicator-wrap"><img  src="' + n.thumbnail_indicator + '" alt="' + n.name + '"></div>',
               // '<div class="region-wrap"><img style="width:'+(mainContentWidth / 640* n.region_image_width)+'px; height:'+(mainContentHeight / 1008* n.region_image_height)+'px;" src="' + n.region_image + '" alt="' + n.name + '"></div>',
                '</div>',
                '</div>'
            ].join(''),
            contentHtml = [
                '<div class="slide">',
                '<div class="painting"><a href="view.html?region='+data[i].data+'"><img src="images/bg_text/bg_text_' + (i + 1) + '.png"></a></div>',
                '</div>'
            ].join('');
        pointArea.push(pointAreaHtml);
        regionArea.push(regionAreaHtml);
        scroll.push(contentHtml);
    });
    $('#pointArea').html(pointArea.join(''));
    $('#regionArea').html(regionArea.join(''));
    $('#scroller').html(scroll.join(''));
    //根据屏幕大小缩放图片
    //$('#importantDetailArea').find('img').css({'width': (mainContentWidth / 6.4).toFixed(2) + '%', 'height': (mainContentHeight / 10.08).toFixed(2) + '%'});
    //$('#regionArea .region-wrap').find('img').css({'width': (mainContentWidth / 6.4).toFixed(2) + '%', 'height': (mainContentHeight / 10.08).toFixed(2) + '%'});

    /*单个景点 End*/

    /*滑动导航 Start*/
    var myScroll = new IScroll('#wrapper', {
        scrollX: true,
        scrollY: false,
        momentum: true,
        snap: true,
        snapSpeed: 400,
        keyBindings: true
    });
    myScroll.on('scrollStart', function () {
        var i = this.currentPage.pageX;
        $('#scroller').find('img').eq(i).attr('src', 'images/bg_text/bg_text_' + (i + 1) + '.png');
    });
    myScroll.on('scrollEnd', function () {
        var i = this.currentPage.pageX;
        scrollTOPoi(i);
        });

    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);
    /*滑动导航 End*/
    /*点击重要景点事件*/
    $('#mainContent').on('click', function (e) {
        //点击图片其他位置会隐藏所有详情图
        var $t = e.target.nodeName.toLowerCase() === 'img' ? $(e.target).parent() : $(e.target),
            name = $t.attr('name');
        switch (name) {
        case 'view-important':
            var index = $t.data('index'),
                w = $('#viewport').width();
            $('#importantDetailArea').find('div').hide();
            $('#importantDetailArea').find('[data-index=' + index + ']').show();
            break;
        default: 
            $('#importantDetailArea').find('div').hide();
            break;
        }
    });
    $('.region-area,.point-area').hide();
    //$('.region-area').eq(4).show();
    //$('.thumbnail-wrap').eq(0).css({'top': '-109px','margin-left': '-7px'});
    //$('.indicator-wrap').eq(0).css({'left': '50%','margin-left': '-13px'} );
	myScroll.goToPage(4, 0, 1000);
    //scrollTOPoi(4);
    //$('.thumbnail-wrap').eq(4).css({'top': '-136px','margin-left': '5px'});
    //$('.indicator-wrap').eq(4).css({'left': '50%','margin-left': '-13px'} );
    //$('.region-area,.point-area').hide();

});

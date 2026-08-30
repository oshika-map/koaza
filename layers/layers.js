var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地理院地図',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '字界',
                interactive: true,
    title: '字界<br />\
    <img src="styles/legend/_1_0.png" /> 蛇田<br />\
    <img src="styles/legend/_1_1.png" /> 石巻<br />\
    <img src="styles/legend/_1_2.png" /> 門脇<br />\
    <img src="styles/legend/_1_3.png" /> <br />\
    <img src="styles/legend/_1_4.png" /> 水越<br />\
    <img src="styles/legend/_1_5.png" /> 浅部<br />\
    <img src="styles/legend/_1_6.png" /> <br />\
    <img src="styles/legend/_1_7.png" /> 気仙沼<br />\
    <img src="styles/legend/_1_8.png" /> 鹿又<br />\
    <img src="styles/legend/_1_9.png" /> 前谷地<br />\
    <img src="styles/legend/_1_10.png" /> 湊<br />\
    <img src="styles/legend/_1_11.png" /> 番外<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: '大字',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 大字'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'id': 'id', 'jichitai': 'jichitai', 'oaza': 'oaza', 'koaza': 'koaza', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'jichitai': 'jichitai', });
lyr__1.set('fieldImages', {'id': 'TextEdit', 'jichitai': 'TextEdit', 'oaza': 'TextEdit', 'koaza': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'jichitai': 'TextEdit', });
lyr__1.set('fieldLabels', {'id': 'no label', 'jichitai': 'no label', 'oaza': 'no label', 'koaza': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'jichitai': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
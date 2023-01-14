am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    chart.fontFamily = "Courier";
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;

    series.data = [{
        "tag": "apily",
        "count": "100"
    }, {
        "tag": "API strategy",
        "count": "50"
    },
    {
        "tag": "API design",
        "count": "50"
    }, {
        "tag": "API development",
        "count": "50"
    }, {
        "tag": "API security",
        "count": "50"
    }, {
        "tag": "Developer experience",
        "count": "50"
    }];

    series.dataFields.word = "tag";
    series.dataFields.value = "count";

    series.heatRules.push({
        "target": series.labels.template,
        "property": "fill",
        "min": am4core.color("#0000CC"),
        "max": am4core.color("#CC00CC"),
        "dataField": "value"
    });


}); // end am4core.ready()
$(function() {

    var $from=$(".from");
    var $to=$(".to");
    var $fun=$(".fun");
    var $graph=$(".graph");
    var $plot=$(".plot");



$plot.click(function (e) {

    e.preventDefault();
    var x = parseFloat($from.val());
    const to = parseFloat($to.val());
    const fun = $fun.val();

    var points = [x, eval(fun)];

    for ( ; x <= to; x +=0.01 )
        points.push([x, eval(fun)]);

    $.plot($graph, [{label: fun, data: points}], {});
});
});
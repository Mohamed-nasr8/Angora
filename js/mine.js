$(window).scroll(function()
    {
let x =("#Team").offset().top;
let y=$(window).scrollTop();

if(y>=x)
{
    $(".navbar").parent().removeClass("container")
}

    }
    )
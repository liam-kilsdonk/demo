import React, { useEffect } from 'react';
import $ from 'jquery';

function Card() {
  useEffect(() => {
    const $cards = $(".card");
    const $style = $(".hover");

    $cards.on("mousemove", function(e) {
      const $card = $(this);
      const l = e.offsetX;
      const t = e.offsetY;
      const h = $card.height();
      const w = $card.width();
      const lp = Math.abs(Math.floor(100 / w * l)-100);
      const tp = Math.abs(Math.floor(100 / h * t)-100);
      const bg = `background-position: ${lp}% ${tp}%;`
      const style = `.card.active:before { ${bg} }`
      $cards.removeClass("active");
      $card.addClass("active");
      $style.html(style);
    }).on("mouseout", function() {
      $cards.removeClass("active");
    });

    return () => {
      $cards.off();
      $style.html('');
    }
  }, []);

  return (
    <div className="card">
      // card content
    </div>
  );
}

export default Card;

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const ul = document.getElementById("ulDomaineName");
  const h4 = document.getElementById("h4domaineName");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  function domaineName() {
    pronoun.forEach(pr => {
      adj.forEach(ad => {
        noun.forEach(no => {
          h4.append(`${pr}${ad}${no}.com `);
          const li = document.createElement("li");
          ul.append(li);
          li.append(`${pr}${ad}${no}.com `);
        });
      });
    });
  }
  domaineName();
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const ul = document.getElementById("ulDomaineName");
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".es", ".net", ".co", ".mx"];
  function domaineName() {
    pronoun.forEach(pr => {
      adj.forEach(ad => {
        noun.forEach(no => {
          extension.forEach(ex => {
            const li = document.createElement("li");
            ul.append(li);
            li.append(`${pr}${ad}${no}${ex}`);
          });
        });
      });
    });
  }
  domaineName();
};

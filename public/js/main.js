var app = (function(){
  return {
    fetchAPI: function(){
      fetch('/api').then(function (response) {
        return response.json()
      }).then(function (projects) {
        console.log(projects);
        projects.forEach(function (x) {
          var projectCard = `
      <div class="project">
        <div>
          <div>
            <h2 class="name">${x.repo}</h2>
            <p class="username">${x.username}</p>
            <a href="${x.repoUrl}" class="repo">Github repo</a>
          </div>
          <div>
            <p class="level">${x.difficulty}</p>
          </div>
        </div>
        <div>
          <h4>comment</h4>
          <p class="comment">${x.comment}</p>
        </div>
        <div>
          <div>
            <p class="readme">README</p>
            <?xml version="1.0" standalone="no"?>
            <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
            <svg width="100%" height="100%" viewBox="0 0 5 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
              <path d="M4.154,2.505l-4.154,2.506l0,-5.011l4.154,2.505Z" style="fill:#000;" />
            </svg>
          </div>
          <p class="languages">${x.languages}</p>
        </div>
        <div class="github-readme">
          ${x.README}
        </div>
      </div>
    `
          document.querySelector('.projects').insertAdjacentHTML('beforeend', projectCard);
        })
      }).then(function () {
        document.querySelectorAll('.readme').forEach(function (x) {
          x.addEventListener('click', function () {
            var readme = this.parentElement.parentElement;
            // readme.nextElementSibling.classList.toggle('accordian')
            this.nextElementSibling.classList.toggle('arrow')

            if (readme.nextElementSibling.style.maxHeight) {
              readme.nextElementSibling.style.maxHeight = null;
            } else {
              readme.nextElementSibling.style.maxHeight = readme.nextElementSibling.scrollHeight + "px";
            }
          })
        })
      }).catch(function (err) {
        document.querySelector('.projects').innerHTML = "api not responding";
      })
    }
  }
})();


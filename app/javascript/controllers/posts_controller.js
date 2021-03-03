import { Controller } from "stimulus"

export default class extends Controller {

    static targets = ["body", "add", "show"];

    addBody() {
        let area = this.bodyTarget;
        if (this.bodyTarget.value != "")
        {
            let content = this.bodyTarget.value.trim();
            var ul = document.getElementById("posts-list");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(content));
            ul.appendChild(li);
        }
        else{
            area.style.borderColor = 'red';
            area.addEventListener('click', function() {
                this.style.borderColor = 'black';
            })
        }

    }

    showAll() {
        this.showTarget.style.visibility = "visible";
    }

    upvote() {
        let post = event.target.closest(".post");
        post.insertAdjacentHTML('beforeend', '<i class="fa fa-check-circle"></i>');
    }

    remove() {
        let post = event.target.closest(".post");
        let posts = document.getElementsByTagName('ul');
        post.style.visibility = "hidden";
        for (let u of posts){
            if(u.children.length > 0 && u.children[0].style.visibility == "hidden")
                u.remove();
        }
    }
}
import { Controller } from "stimulus"

export default class extends Controller {

    static targets = ["body", "add", "show"]

    addBody() {
        let content = this.bodyTarget.value;
        this.addTarget.insertAdjacentHTML('beforebegin', "<li>" + content + "</li>");
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
            if(u.children[0].style.visibility == 'hidden')
                u.style.visibility = "hidden";
        }
    }
}
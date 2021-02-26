import {Controller} from  "stimulus"
export default class extends Controller{
    static targets = ['body', 'add', 'show']
    addBody() {
        let content = this.bodyTarget.value;
        this.addTarget.insertAdjacentHTML('beforebegin', '<li>' + content + '</li>');
    }

    showAll(){
        this.showTarget.style.visibility = "visibility" = "visible";
    }

    upvote(){
        let post = target.closest(".post");
        post.insertAdjacentHTML('beforeend', '<i class="fa fa-check-circle"></i>')
    }

    remove(){
        let post = target.closest(".post");
        post.style.visibility = "hidden";
    }
}
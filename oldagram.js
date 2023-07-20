import {posts} from './inst.js';

const feed = document.getElementById('feed')

function feedHtml(){
    for (let post of posts){
        feed.innerHTML += `
                <section>
                    <div class='user-head' >
                        <div class='up-flex'> 
                            <img src='${post.avatar}' class='user-avatar'>
                            <div class='post-text'>
                                <p><span class='bold'>${post.name}</span></p>
                                <p>${post.location}</p>
                            </div>
                        </div>
                    </div>
                    <img src='${post.post}' class='post-photo'>
                    <div class='bottom-text'>
                        <div class='icon-line'>
                            <div class='icon-flex'>
                                <img src='images/icon-heart.png' class='icon heart' data-like>
                                <img src='images/icon-comment.png' class='icon'>
                                <img src='images/icon-dm.png' class='icon'>
                            </div>
                        </div>
                        <p><span class='bold'>${post.likes} likes</span></p>
                        <p><span class='bold'>${post.username}</span> ${post.comment}</p>
                    </div>
                </section>
    `
    }
    
}
feedHtml()


let newReview, reviews;

function start(){
    newReview = document.getElementById("inpt-1");
    reviews = document.getElementById("reviews");
}


function addReview(){    

    if(newReview.value){
        const li = document.createElement("li");
        li.innerHTML = newReview.value;
        li.style.fontSize = '20px';
        replyLikeDelete(li);
        reviews.appendChild(li);
        newReview.value=null;
    }
}

function replyLikeDelete(review){
    const reply = replyFn(review);
    const like = LikeFn(review)
    const deleteBtn = deleteFn(review)
   
    review.append(reply, like, deleteBtn);

}

function replyFn(review){
    const reply = document.createElement("button");
    reply.className = "nested-btn"
    reply.setAttribute("id","reply-btn")
    reply.innerHTML ="Reply";
    reply.addEventListener("click", (e)=>{
        createReplyInput(review);
        
    });
    return reply;
}

function createReplyInput(review){
    let cancel,add;
    const textArea = document.createElement("textarea");
    textArea.className = "nested-text"
        const br = document.createElement("br");
        cancel = cancelFn(br, textArea, add)
        add = addFn(br, textArea, review, cancel)
        cancel = cancelFn(br, textArea, add)
        
       review.append(br, textArea, add, cancel);
}


function addFn(br,textArea,review,cancel){
    const add = document.createElement("button")
    add.className = "nested-btn"
    add.innerHTML = "Add";
    add.addEventListener("click", ()=>{
        const li = document.createElement("li");
        li.className = "add-comment"
        li.innerHTML=textArea.value;
        replyLikeDelete(li);
        

        br.remove();
        textArea.remove();
        add.remove();
        cancel.remove();

        const ul = document.createElement("ul");
        ul.appendChild(li);
        review.appendChild(ul);
    })
    return add;
}

function cancelFn(br, textArea, add){
    const cancel = document.createElement("button")
    cancel.className = "nested-btn"
    cancel.innerHTML="Cancel";
    cancel.addEventListener("click", ()=>{
        
        textArea.remove();
        add.remove();
        br.remove();
        cancel.remove();
    });
    return cancel;
}

function LikeFn(review){
    const like = document.createElement("button");
    like.className = "nested-btn"
    like.innerHTML ="👍 0";
    like.addEventListener("click",(e)=>{
    let count=  like.innerHTML.split(" ")[1];
    count++;
    like.innerHTML = `👍 ${count}`;

    })
    return like;


}

function deleteFn(review){
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "nested-btn"
    deleteBtn.innerHTML ="Delete";
    deleteBtn.addEventListener("click",(e)=>{
        review.remove();
    })
    return deleteBtn;
}
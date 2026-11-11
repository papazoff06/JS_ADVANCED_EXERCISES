function solution(data){
    const getRating = () => {
        let totalVotes = this.upvotes + this.downvotes;
        let balance = this.upvotes - this.downvotes;

        if (totalVotes < 10) {
            return "new";
        }
        if (this.upvotes / totalVotes > 0.66) {
            return 'hot';
        }
        if (balance >= 0 && totalVotes > 100) {
            return 'controversial';
        }
        if (balance < 0) {
            return 'unpopular';
        }
        return 'new';
    }
    
    if (data === 'upvote') {
        this.upvotes++;
    } else if (data === 'downvote') {
        this.downvotes++;
    } else {
        let result = {
            reportUp: this.upvotes,
            reportDown: this.downvotes,
            counter: this.upvotes - this.downvotes,
        };

        if (this.upvotes + this.downvotes > 50) {
            let bonus = Math.ceil((this.upvotes > this.downvotes ? this.upvotes : this.downvotes) * 0.25);
            result['reportDown'] += bonus;
            result['reportUp'] += bonus;
        }

        let output = [];
        let rating = getRating();

        let arrRating = Object.entries(result);
        for (let row of arrRating) {
            output.push(row[1]);
        }
        output.push(rating);
        

        return output; 
    }
}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
for(let i = 0; i < 50; i++){
    solution.call(post, 'downvote');         // (executed 50 times)
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']


Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var json = {
    questions: [
        {
            type: "matrix",
            name: "Quality",
            title: "Please indicate if you agree or disagree with the following statements",
            columns: [
                {
                    value: 1,
                    text: "Strongly Disagree"
                }, {
                    value: 2,
                    text: "Disagree"
                }, {
                    value: 3,
                    text: "Neutral"
                }, {
                    value: 4,
                    text: "Agree"
                }, {
                    value: 5,
                    text: "Strongly Agree"
                }
            ],
            rows: [
                {   
                    value: "id1",
                    text: "Would you say you are more open person?"
                }, {
                    
                    value: "id2",
                    text: "Product does what it claims"
                }, {
                    
                    value: "id3",
                    text: "Product is better than other products on the market"
                }, {
                    
                    value: "id4",
                    text: "Product is easy to use"
                }
            ]
        }
    ]
};

var survey = new Survey.Model(json);
survey.render("surveyElement")

// survey.onComplete.add(function (result) {
//         var surveyResult = {
//             'name': $('#name').val().trim(),
//             'photo': $('#photo').val().trim(),
//             'scores': [result.data.Quality.id1, result.data.Quality.id2, result.data.Quality.id3, result.data.Quality.id4]
// // result.data.Quality.id1, result.data.Quality.id1, result.data.Quality.id1, result.data.Quality.id1,]
//         };
//         //grab current URL for post method
//         var currentURL = window.location.origin;
//         //ajax send info to api route and await response
//         // function success(data) {
//         //     //build info into modal, use html to replace previous friend
//         //     $('#surveyElement').html('<h3>Meet your new friend!</h3>' +
//         //         '<h3> ' + data.name + '</h3>' +
//         //         '<img src="' + data.photo + '" width=300px>');

//         // }
//         $.ajax({
//             type: "POST",
//             url: currentURL + "/api/friends",
//             data: surveyResult
//         });
//         // console.log(result.data.Quality.id1)
//         // document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
//     });


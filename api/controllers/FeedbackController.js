/**
 * FeedbackController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */




module.exports = {
    list:async function(req, res){
        let ListFeedback = await Feedback.find({}).populate('user').exec(function(err, ListFeedback){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            console.log(ListFeedback)
            res.view('ListFeedback',{ListFeedback:ListFeedback})
        });
        console.log(ListFeedback)
      
      
         
 },
    create: async (req, res) => {
        try {
            sails.log.debug(req.session)
            sails.log.debug(req.body)
            // let userId = req.session.userId
            // console.log(user.length)
            

                var feedback = await Feedback.create({ subject:req.body.subject,description:req.body.description,user:req.session.userId }).fetch()
                console.log('new feedback is added')
                console.log({ feedback })
              
                res.send('Feedback successFully')
        }
            
      



        catch (error) {
            console.error(error.message)
            res.status(500).send('server error')
        }

    },
    edit: function(req, res){
        Feedback.findOne({id:req.params.id}).populate('user').exec(function(err, feedback){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.view('feedbackdetail', {feedback:feedback});
        });
    },
    delete: async function(req, res){

        let feedback = await Feedback.find({ _id:req.params.id })
        if(feedback.length==0){
            console.log('user id not found')
            res.send('user id not found')
        }
        else{
        Feedback.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
        console.log('Feedback deleted successfully')
        return res.redirect('/user/feedback')
        });
    }
   
}
   
    

};


arn:aws:iam::275016939756:role/CloudResumeSQS
'arn:aws:iam::275016939756:role/cr-sqs'
AWS.config.region = 'ap-southeast-1';

// Set the region 

var roleToAssume = {RoleArn: 'arn:aws:iam::275016939756:role/cr-sqs',
ExternalId: 'crresumesqs',
                    RoleSessionName: 'session1',
                    DurationSeconds: 900,};
var roleCreds;

// Create the STS service object    
var sts = new AWS.STS({apiVersion: '2011-06-15'});

//Assume Role
sts.assumeRole(roleToAssume, function(err, data) {
    if (err) console.log(err, err.stack);
    else{
        roleCreds = {accessKeyId: data.Credentials.AccessKeyId,
                     secretAccessKey: data.Credentials.SecretAccessKey,
                     sessionToken: data.Credentials.SessionToken};
        stsGetCallerIdentity(roleCreds);
    }
});

//Get Arn of current identity
function stsGetCallerIdentity(creds) {
    var stsParams = {credentials: creds };
    // Create STS service object
    var sts = new AWS.STS(stsParams);
        
    sts.getCallerIdentity({}, function(err, data) {
        if (err) {
            console.log(err, err.stack);
        }
        else {
            console.log(data.Arn);
        }
    });    
}
          
  


     

       
 
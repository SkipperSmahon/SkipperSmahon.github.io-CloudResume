import './App.css';
import React, { useState } from 'react'




function App() {

  const [details, setDetails] = useState({name:'', email:'', message:''}) 
  const submitHandler = e => {
    e.preventDefault()
    PostForm(details);
  }
  
  const PostForm = details => { 

     var AWS = require('aws-sdk');
     AWS.config.region = 'ap-southeast-1'; // Region
     AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-southeast-1:82513d27-14b5-4470-9ee7-415e0558c5f3'
     });

     var sqs = new AWS.SQS({ apiVersion: '2012-11-05'});
     var params = {
          DelaySeconds: 3,
          MessageAttributes: {
               "Name": {
                 DataType: "String",
                 StringValue: details.name,
               },
               "Email": {
                 DataType: "String",
                 StringValue: details.email,
               }},
               MessageBody: JSON.stringify(details.message),
               QueueUrl: 'https://sqs.ap-southeast-1.amazonaws.com/275016939756/testsqs'
               }

               sqs.sendMessage(params, function(err, data) {
                    if (err) {
                      console.log("Error", err);
                    } else {
                      console.log("Success", data.MessageId);
                    }})
                        console.log(details);
               }
          
  
     

       
  return (
    <tbody data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
    <div> 



{/* <!-- Navigation Section --> */}

<div class="navbar navbar-fixed-top custom-navbar" role="navigation">
<div class="container">

{/*       <!-- navbar header --> */}
  <div class="navbar-header">
       <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
       </button>
       <a href="/#" class="navbar-brand">Skipper Smahon</a>
  </div>

  <div class="collapse navbar-collapse">
       <ul class="nav navbar-nav navbar-right">
            <li><a href="#home" class="smoothScroll">Home</a></li>
            <li><a href="#about" class="smoothScroll">About Me</a></li>
            <li><a href="#experience" class="smoothScroll">Experiences</a></li>
            <li><a href="#quotes" class="smoothScroll">Testimonial</a></li>
            <li><a href="#contact" class="smoothScroll">Contact</a></li>
       </ul>
  </div>

</div>
</div>


{/* <!-- Home Section --> */}

<section id="home" class="parallax-section">
<div class="container">
  <div class="row">

       <div class="col-md-6 col-sm-6">
            <div class="home-img"></div>
       </div>

       <div class="col-md-6 col-sm-6">
            <div class="home-thumb">
                 <div class="section-title">
                      <h4 class="wow fadeInUp" data-wow-delay="0.3s">welcome to my website</h4>
                      <h1 class="wow fadeInUp" data-wow-delay="0.6s">Hello, I am <strong>Skipper Smahon</strong> currently based in Singapore.</h1>
                      <p class="wow fadeInUp" data-wow-delay="0.9s">I am a cloud computing enthusiast who aims to one day plant my foot in the industry.</p>
                      
                      <a href="#about" class="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">Get Started</a>
                      
                 </div>
            </div>
       </div>


  </div>
</div>
</section>


{/* <!-- About Section --> */}

<section id="about" class="parallax-section">
<div class="container">
  <div class="row">

       <div class="col-md-6 col-sm-12">
            <div class="about-thumb">
                 <div class="wow fadeInUp section-title" data-wow-delay="0.4s">
                      <h1>About Me</h1>
                      <p class="color-yellow"></p>
                 </div>
                 <div class="wow fadeInUp" data-wow-delay="0.8s">
                      <p>A curious and passionate individual interested in technology.</p>
                      <p>Currently I am experimenting with AWS with plans to learn PowerShell as a automation tool and IaC. </p>
                      <p>This website is a side project that I am using to integrate various AWS services into. I will be constantly updating the page in the future.  </p>
                 </div>
            </div>
       </div>

       <div class="col-md-3 col-sm-6">
            <div class="background-image about-img"></div>
       </div>

       <div class="bg-yellow col-md-3 col-sm-6">
            <div class="skill-thumb">
                 <div class="wow fadeInUp section-title color-white" data-wow-delay="1.2s">
                      <h1>My Skills</h1>
                      <p class="color-white">AWS . Pwsh Python JavaScript . SQL</p>
                 </div>

                 <div class=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">
                 <strong>AWS</strong>
                      <span class="color-white pull-right"> 50%</span>
                           <div class="progress">
                                <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" width="90%"></div>
                           </div>

                 <strong>PowerShell</strong>
                      <span class="color-white pull-right"> 60%</span>
                           <div class="progress">
                                <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" width="70%"></div>
                           </div>

                 <strong>Python</strong>
                      <span class="color-white pull-right"> 40%</span>
                           <div class="progress">
                                <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" width="80%"></div>
                           </div>
                 </div>

            </div>
       </div>

  </div>
</div>
</section>


{/* <!-- Service Section --> */}

<section id="service" class="parallax-section">
<div class="container">
  <div class="row">

       <div class="bg-yellow col-md-3 col-sm-6">
            <div class="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">
                 <i class="fa fa-desktop"></i>
                      <h3>Cloud computing</h3>
                      <p class="color-white">An interest that I have pursued since my polytechnic education. I hope to land a career in this area of technology.  </p>
            </div>
       </div>

       <div class="col-md-3 col-sm-6">
            <div class="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
                 <i class="fa fa-paper-plane"></i>
                      <h3>System Administration</h3>
                      <p class="color-white">My educational background covered various modules on servers and networks.  </p>
            </div>
       </div>

       <div class="bg-dark col-md-3 col-sm-6">
            <div class="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
                 <i class="fa fa-table"></i>
                      <h3>Databases</h3>
                      <p class="color-white">A specialisation I was interested in in polytechnic and a topic that was heavily tested in my AWS certification.</p>
            </div>
       </div>

       <div class="bg-white col-md-3 col-sm-6">
            <div class="wow fadeInUp service-thumb" data-wow-delay="1.8s">
                 <i class="fa fa-html5"></i>
                      <h3>Coding</h3>
                      <p>I understand the basics and know how to navigate my way through python, C# and JavaScript.</p>
            </div>
       </div>

  </div>
</div>
</section>


{/* <!-- Experience Section --> */}

<section id="experience" class="parallax-section">
<div class="container">
  <div class="row">

       <div class="col-md-6 col-sm-6">
            <div class="background-image experience-img"></div>
       </div>

       <div class="col-md-6 col-sm-6">
            <div class="color-white experience-thumb">
                 <div class="wow fadeInUp section-title" data-wow-delay="0.8s">
                      <h1>My Experiences</h1>
                      <p class="color-white"></p>
                 </div>

                 <div class="wow fadeInUp color-white media" data-wow-delay="1.2s">
                      <div class="media-object media-left">
                           <i class="fa fa-laptop"></i>
                      </div>
                      <div class="media-body">
                           <h3 class="media-heading">Infrastructure Migration <small>Feb 2019 - Sep 2019</small></h3>
                           <p class="color-white">Converted hundreds of outdated powershell scripts to run on newly deployed company servers.</p>
                           <p class="color-white">Upgraded old servers to newer operating systems and performed monthly maintenance to databases.</p>
                      </div>
                 </div>

                {/*  <div class="wow fadeInUp color-white media" data-wow-delay="1.6s">
                      <div class="media-object media-left">
                           <i class="fa fa-laptop"></i>
                      </div>
                      <div class="media-body">
                           <h3 class="media-heading"><small>2015 Oct - 2017 Jan</small></h3>
                           <p class="color-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      </div>
                 </div> */}

            </div>
       </div>

  </div>
</div>
</section>


{/* <!-- Education Section --> */}

<section id="education" class="parallax-section">
<div class="container">
  <div class="row">

       <div class="col-md-6 col-sm-6">
            <div class="color-white education-thumb">
                 <div class="wow fadeInUp section-title" data-wow-delay="0.8s">
                      <h1>My Education</h1>
                      {/* <p class="color-white">In cursus orci non ipsum gravida dignissim</p> */}
                 </div>

                 <div class="wow fadeInUp color-white media" data-wow-delay="1.2s">
                      <div class="media-object media-left">
                           <i class="fa fa-laptop"></i>
                      </div>
                      <div class="media-body">
                           <h3 class="media-heading">Diploma in Information Technology <small>Apr 2017 - Feb 2020</small></h3>
                           <b>Ngee Ann Polytechnic</b>
                           <p class="color-white">I learned the basics of website development, data centre management, and virutalisation. I specialised primarily in cloud computing, networking and databases. </p>
                      </div>
                 </div>

                 <div class="wow fadeInUp color-white media" data-wow-delay="1.6s">
                      <div class="media-object media-left">
                           <i class="fa fa-laptop"></i>
                      </div>
                      <div class="media-body">
                           <h3 class="media-heading">GCE O-Level <small>Jan 2013 - Nov 2016</small></h3>
                           <b>Anglo-Chinese School (Barker Road)</b>
                           <p class="color-white"></p>
                      </div>
                 </div>

            </div>
       </div>

       <div class="col-md-6 col-sm-6">
            <div class="background-image education-img"></div>
       </div>

  </div>
</div>
</section>


{/* <!-- Quotes Section --> */}

<section id="quotes" class="parallax-section">
<div class="overlay"></div>
<div class="container">
  <div class="row">

       <div class="col-md-offset-1 col-md-10 col-sm-12">
            <i class="wow fadeInUp fa fa-star" data-wow-delay="0.6s"></i>
            <h2 class="wow fadeInUp" data-wow-delay="0.8s">Proin lobortis eu diam et facilisis. Fusce nisi nibh, molestie in vestibulum quis, auctor et orci.</h2>
            <p class="wow fadeInUp" data-wow-delay="1s">Curabitur at pulvinar ante. Duis dui urna, faucibus eget felis eu, iaculis congue sem.</p>
       </div>

  </div>
</div>
</section>


{/* <!-- Contact Section --> */}

<section id="contact" class="parallax-section">
<div class="container">
  <div class="row">

       <div class="col-md-6 col-sm-12">
            <div class="contact-form">
                 <div class="wow fadeInUp section-title" data-wow-delay="0.2s">
                      <h1 class="color-white">Say hello..</h1>
                      <p class="color-white">Don't be afraid to ask me a question. </p>
                 </div>

                 <div id="form">

                      <form onSubmit={submitHandler}>
                           <div class="wow fadeInUp" data-wow-delay="1s">
                                <input name="name" type="text" class="form-control" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} placeholder="Your Name"/>
                           </div>
                           <div class="wow fadeInUp" data-wow-delay="1.2s">
                                <input name="email" type="email" class="form-control" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} placeholder="Your Email"/>
                           </div>
                           <div class="wow fadeInUp" data-wow-delay="1.4s">
                                <textarea name="message" rows="5" class="form-control" id="message" onChange={e => setDetails({...details, message: e.target.value})} value={details.messsage} placeholder="Write your message..."></textarea>
                           </div>
                           <div class="wow fadeInUp col-md-6 col-sm-8" data-wow-delay="1.6s">
                                <input name="submit" type="submit" class="form-control" id="submit" value="Send"/>
                           </div>
                      </form>
                 </div>

            </div>
       </div>

       

       <div class="col-md-3 col-sm-6">
            <div class="background-image contact-img"></div>
       </div>

       <div class="bg-dark col-md-3 col-sm-6">
            <div class="contact-thumb">

                 <div class="wow fadeInUp contact-info" data-wow-delay="0.8s">
                      <h3 class="color-white">Contact.</h3>
                      <p><i class="fa fa-envelope-o"></i> <a href="mailto:hello@company.co">Skipper_smahon@hotmail.com</a></p>

                 </div>

            </div>
       </div>

  </div>
</div>
</section>


{/* <!-- Footer Section --> */}

<footer>
<div class="container">
<div class="row">

       <div class="col-md-12 col-sm-12">
{/*             <div class="wow fadeInUp footer-copyright" data-wow-delay="1.8s">
                 <p>Copyright &copy; 2016 Your Company
            
            | Design: <a href="http://www.google.com/+templatemo" target="_parent">templatemo</a></p>
            </div> */}
<ul class="wow fadeInUp social-icon" data-wow-delay="2s">
                 <li><a href="https://www.facebook.com/skippersmahon/" class="fa fa-facebook"></a></li>

                 <li><a href="https://www.linkedin.com/in/skipper-smahon/" class="fa fa-linkedin"></a></li>
            </ul>
       </div>

</div>
</div>
</footer>

    </div>
    </tbody>
); 
}



export default App;

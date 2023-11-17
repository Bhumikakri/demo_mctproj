let names = document.querySelector(".nm");
let obj = document.querySelector(".obj");
let results=document.querySelector(".outputcontainer");
let container= document.querySelector(".container2");
let headcolor = document.getElementById("headrcolor");
let txtColor = document.getElementById("hdtxtcolor");
let backcolor = document.getElementById("backcolor");
let emails= document.querySelector(".email");
let nums = document.querySelector(".num");
let contry = document.querySelector(".cont");
let forjob = document.querySelector("#titl");
let resumeTypes = document.querySelector("#resumeTpes");
let Employ = document.querySelector(".employments");
let Empbtn = document.querySelector(".addEmp");
let ProjectDetails = document.querySelector(".Projects");
let projBtn = document.querySelector(".addProj");
let EducationDetails = document.querySelector(".EducationDtls");
let EducatBtn = document.querySelector(".addeducate");
let experianceone =  document.querySelector(".experiance");
let experiancetwo = document.querySelector(".experiancc");
let ProjectAppend = document.querySelector(".ProjectsDetails");
let Qualifications=document.querySelector(".Qualifications");

// -------------download proccess----------------------//
let finalesResume = document.querySelector(".outputTypOne");
let downloadbtn = document.querySelector(".download");


function downevent(btn2, val) {
    btn2.addEventListener("click", () => {
        val.style.width = "100%";
        val.style.height = "100%";
        html2pdf(val, {
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }).from(val);
    });
}

downevent(downloadbtn, finalesResume);


// ---------------------------output fetched-------------------------//
let newtemp = document.querySelector(".outputTypTwo");
newtemp.style.display = "none";
let txt = document.querySelector(".name");

// --------------------------add skills in resume-------------------------------//

const skillsName = document.getElementById("skillNm");
let skillContainer = document.querySelector(".skill");
let skillcontainernxt = document.querySelector(".skille");
// console.log(skillContainer);
let idx=0;

skillsName.addEventListener("input", (e)=>{
    let nms = document.createElement("p");
    nms.classList.add("Skillnm");
    // console.log(e.data);
    if(e.target.value[e.target.value.length-1] == "," && e.data != null){
       let idx2 = e.target.value.length-1;
       nms.innerText=`${e.target.value.slice(idx,idx2)}`;
       var clone = nms.cloneNode(true);
       skillContainer.appendChild(nms);
       skillcontainernxt.appendChild(clone);
       idx=idx2+1;
    }
    if((e.data == null && e.target.value[e.target.value.length-1] == ",") || e.target.value=="" ){
        AllSkills = document.querySelectorAll(".Skillnm");
        skillContainer.removeChild(AllSkills[AllSkills.length-1]);
        skillcontainernxt.removeChild(AllSkills[AllSkills.length-1]);
        if(e.target.value.length>0){
            e.target.value.slice(0,e.target.value.length);
        }
    }
})

// -----------------------for heading-------------------------------//
headcolor.addEventListener("input",(e)=>{
    document.querySelector(".header").style.backgroundColor=`${e.target.value}`;
});
// -----------------------name in heading------------------//
names.addEventListener("input", (e)=>{
    txt.textContent = `${e.target.value}`;
    document.querySelector(".name2").textContent=`${e.target.value}`;
})
// -------------------name color --------------------------//
txtColor.addEventListener("input", (e)=>{
    txt.style.color=`${e.target.value}`;
    document.querySelector(".titl").style.color=`${e.target.value}`;
})
// ---------------------------------------- back color--------------------------//
backcolor.addEventListener("input", (e)=>{

    document.querySelector(".outputleft").style.backgroundColor=`${e.target.value}`;
})
emails.addEventListener("input", (e)=>{
    document.querySelector(".p2").textContent=`${e.target.value}`;
    document.querySelector(".envel").textContent=`${e.target.value}`;
})
nums.addEventListener("input", (e)=>{
    document.querySelector(".p1").textContent=`${e.target.value}`;
    document.querySelector(".phon").textContent=`${e.target.value}`;
})
contry.addEventListener("input", (e)=>{
    document.querySelector(".p3").textContent=`${e.target.value}`;
    document.querySelector(".locat").textContent=`${e.target.value}`;
})

forjob.addEventListener("input", (e)=>{
    document.querySelector(".titl").textContent=`${e.target.value}`;
    document.querySelector(".titl2").textContent=`${e.target.value}`;
})

obj.addEventListener("input", (e)=>{
    document.querySelector(".sumry").innerHTML=`<li>${e.target.value}</li>`;
    document.querySelector(".summry").innerHTML=`<li>${e.target.value}</li>`;
})

// ---------------------------------resume template changes -------------------------------------//

let x="true";
resumeTypes.addEventListener("change",(e)=>{
    if(x==="true"){
        finalesResume.style.display="none";
        newtemp.style.display = "flex";
        x="false";
    }
    else{
        finalesResume.style.display="flex";
        newtemp.style.display = "none";
        x="true";
    }
})

let counter=0;
let count=0;
let countt=0;
// ---------------creating funtion for append the employement details in 1st template----------------------//
function createProfesionaldtlOne(dateStart,dateEnd,JobTitles,Employer,Descriptions){

    // console.log(dateStart,dateEnd,JobTitles,Employer,Descriptions);
    let exp = document.createElement("div");
    exp.classList.add("ProfessionalExp");
    exp.innerHTML=`<div class="leftinfo" data-id="${counter}">
    <ul><li class="ti" id="ti${counter}"></li></ul>
    <p class="empNam" id="empNam${counter}"><p>
    <p class="disc" id="disc${counter}"><p>
    </div><div class="timing"><span class="sp1" id="sp1${counter}">-Present</span><span class="sp2" id="sp2${counter}"></span></div>`;
    
    dateStart.addEventListener("input", (e)=>{
        let varible= document.querySelector("#sp1"+`${counter}`);
        // console.log(varible,"#sp1"+`${counter}`,exp);
        varible.textContent=`${e.target.value}`;
        
    })
    dateEnd.addEventListener("input", (e)=>{
        document.querySelector(`#sp2${counter}`).textContent=`${e.target.value}`;
    })
    JobTitles.addEventListener("input", (e)=>{
        document.querySelector(`#ti${counter}`).textContent=`${e.target.value}`;
    })
    Employer.addEventListener("input", (e)=>{
        document.querySelector(`#empNam${counter}`).textContent=`${e.target.value}`;
    })
    Descriptions.addEventListener("input", (e)=>{
        document.querySelector(`#disc${counter}`).textContent=`Descrip:-${e.target.value}`;
    })
    // var clone = exp.cloneNode(true);
    experianceone.appendChild(exp);
    // experiancetwo.appendChild(clone);

    // createProfesionaldtlTwo(dateStart,dateEnd,JobTitles,Employer,Descriptions);
}

// ---------------creating funtion for append the employement details in 2nd template----------------------//
// --------------its not working------------------//

// var counter=0;

// function createProfesionaldtlTwo(dateStart,dateEnd,JobTitles,Employer,Descriptions){
//     // console.log(dateStart,dateEnd,JobTitles,Employer,Descriptions);
//     let expp = document.createElement("div");
//     expp.classList.add("ProfessionalExp");
//     expp.innerHTML=`<div class="leftinfo" data-id="${counter}">
//     <ul><li class="ti" id="ti${counter}"></li></ul>
//     <p class="empNam" id="empNam${counter}"><p>
//     <p class="disc" id="disc${counter}"><p>
//     </div><div class="timing"><span class="sp1" id="sp1${counter}">-Present</span><span class="sp2" id="sp2${counter}"></span></div>`;
//     dateStart.addEventListener("input", (e)=>{
//         console.log(counter);
//         let varible= document.querySelector("#sp1"+`${counter}`);
//         console.log(varible,"#sp1"+`${counter}`,expp);
//         varible.textContent=`${e.target.value}`;
        
//     })
//     dateEnd.addEventListener("input", (e)=>{
//         document.querySelector(`#sp2${counter}`).textContent=`${e.target.value}`;
//     })
//     JobTitles.addEventListener("input", (e)=>{
//         document.querySelector(`#ti${counter}`).textContent=`${e.target.value}`;
//     })
//     Employer.addEventListener("input", (e)=>{
//         document.querySelector(`#empNam${counter}`).textContent=`${e.target.value}`;
//     })
//     Descriptions.addEventListener("input", (e)=>{
//         document.querySelector(`#disc${counter}`).textContent=`Descrip:-${e.target.value}`;
//     })
//     experiancetwo.appendChild(expp);

// }

// -------------------------------  Employe btn pe details input create -------------------------//


Empbtn.addEventListener("click",(e)=>{
    counter++;
    console.log(counter);
    e.preventDefault();
    let newform = document.createElement("div");
    newform.classList.add("empdtls");
    newform.innerHTML=`<lable>Start</lable>
    <input type="month" placeholder="------" id="dateSt${counter}" class="dateSt">
    <lable>End</lable>
    <input type="month" placeholder="------" id="dateEn${counter}" class="dateEn">
    <input type="text" placeholder="Job Title" id="JbTitl${counter}" class="JbTitl">
    <input type="text" placeholder="Employer" id="Empnm${counter}" class="Empnm">
    <textarea name="" placeholder="Descriptions..." id="DescripDtl${counter}"  class="obj" maxlength="100"></textarea>
    `;
    Employ.appendChild(newform);
    let dateStart= newform.querySelector(`#dateSt${counter}`);
    let dateEnd= newform.querySelector(`#dateEn${counter}`);
    let JobTitles= newform.querySelector(`#JbTitl${counter}`);
    let Employer = newform.querySelector(`#Empnm${counter}`);
    let Descriptions = newform.querySelector(`#DescripDtl${counter}`);
    // console.log(dateStart);
    createProfesionaldtlOne(dateStart,dateEnd,JobTitles,Employer,Descriptions);
    // counter++;
    // createProfesionaldtltwo(dateStart,dateEnd,JobTitles,Employer,Descriptions);

})
// ---------------------------------------creating funtion for append the Projrct details in template------------------------------------------------------//

function createProjectsDetaile(StartDate,EndDate,ProjDetle,DescriptionsProj){
    
    let Proj = document.createElement("div");
    Proj.classList.add("AddProj");
    Proj.innerHTML=`<div class="leftinfo" data-id="${count}">
    <ul><li class="ti" id="titl${count}"></li></ul>
    <p class="disc" id="discri${count}"><p>
    </div><div class="timing"><span class="sp1" id="pro1${count}">-Present</span><span class="sp2" id="pro2${count}"></span></div>`

    StartDate.addEventListener("input", (e)=>{
        let varibles= document.querySelector("#pro1"+`${count}`);
        // console.log(varibles,"#sp1"+`${counter}`,exp);
        varibles.textContent=`${e.target.value}`;
        
    })
    EndDate.addEventListener("input", (e)=>{
        document.querySelector(`#pro2${count}`).textContent=`${e.target.value}`;
    })
    ProjDetle.addEventListener("input", (e)=>{
        document.querySelector(`#titl${count}`).textContent=`${e.target.value}`;
    })
    DescriptionsProj.addEventListener("input", (e)=>{
        document.querySelector(`#discri${count}`).textContent=`Descrip:-${e.target.value}`;
    })

    ProjectAppend.appendChild(Proj);
}

// -------------------Project btn pe details inputs create -------------------------//

projBtn.addEventListener("click", (e)=>{
    count++;
    e.preventDefault();
    let ProjForm = document.createElement("div");
    ProjForm.classList.add("allProj")
    ProjForm.innerHTML=`<lable>Start</lable>
    <input type="month" placeholder="------" id="stDate${count}" >
    <lable>End</lable>
    <input type="month" placeholder="------" id="enDate${count}">
    <input type="text" placeholder="Project Title" id="ProjDtl${count}">
    <textarea name="" placeholder="Description" id="DescripProj${count}"  class="obj" maxlength="100"></textarea>
    `;

    ProjectDetails.appendChild(ProjForm);
    let StartDate= ProjForm.querySelector(`#stDate${count}`);
    let EndDate= ProjForm.querySelector(`#enDate${count}`);
    let ProjDetle= ProjForm.querySelector(`#ProjDtl${count}`);
    let DescriptionsProj = ProjForm.querySelector(`#DescripProj${count}`);

    createProjectsDetaile(StartDate,EndDate,ProjDetle,DescriptionsProj);
})
// --------------------------------------------------------------------------//

function createEducationDetails(StartD,EndD,Degree,institute,InstituteDesc){
    let Quali = document.createElement("div");
    Quali.classList.add("QualificateDtl");
    Quali.innerHTML=`<div class="leftinfo" data-id="${countt}">
    <ul><li  id="qali${countt}"></li></ul>
    <p  id="ensNam${countt}"><p>
    <p  id="discc${countt}"><p>
    </div><div class="timing"><span class="sp1" id="Quali1${countt}">-Present</span><span class="sp2" id="Quali2${countt}"></span></div>`;

    StartD.addEventListener("input", (e)=>{
        let varibl= document.querySelector("#Quali1"+`${countt}`);
        // console.log(varible,"#sp1"+`${counter}`,exp);
        varibl.textContent=`${e.target.value}`;
        
    })
    EndD.addEventListener("input", (e)=>{
        document.querySelector(`#Quali2${countt}`).textContent=`${e.target.value}`;
    })
    Degree.addEventListener("input", (e)=>{
        document.querySelector(`#qali${countt}`).textContent=`${e.target.value}`;
    })
    institute.addEventListener("input", (e)=>{
        document.querySelector(`#ensNam${countt}`).textContent=`${e.target.value}`;
    })
    InstituteDesc.addEventListener("input", (e)=>{
        document.querySelector(`#discc${countt}`).textContent=`Descrip:-${e.target.value}`;
    })
    
    Qualifications.appendChild(Quali);

}
// --------------------------------Education btn pe educationdetails input create-------------------------//

EducatBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let EduForm = document.createElement("div");
    EduForm.classList.add("allProj")
    EduForm.innerHTML=`<lable>Start</lable>
    <input type="month" placeholder="------" id="StartD${countt}">
    <lable>End</lable>
    <input type="month" placeholder="------" id="EndD${countt}">
    <input type="text" placeholder="Qualification" id="Qualif${countt}">
    <input type="text" placeholder="School/College" id="InstiName${countt}">
    <textarea name="" placeholder="Description" id="decribe${countt}"  class="obj" maxlength="100"></textarea>
    `;

    EducationDetails.appendChild(EduForm);
    let StartD = EduForm.querySelector(`#StartD${countt}`);
    let EndD= EduForm.querySelector(`#EndD${countt}`);
    let Degree= EduForm.querySelector(`#Qualif${countt}`);
    let institute = EduForm.querySelector(`#InstiName${countt}`);
    let InstituteDesc = EduForm.querySelector(`#decribe${countt}`);
    
    createEducationDetails(StartD,EndD,Degree,institute,InstituteDesc);
})





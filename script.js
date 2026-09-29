const menuButton=document.querySelector(".menu"),mainNav=document.querySelector("header nav");
if(menuButton&&mainNav){const closeMenu=()=>{mainNav.classList.remove("open");menuButton.setAttribute("aria-expanded","false")};menuButton.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open))});mainNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu()});window.addEventListener("resize",()=>{if(innerWidth>900)closeMenu()})}


const enquiryModal=document.getElementById("enquiryModal");
if(enquiryModal){
 const selected=document.getElementById("selectedService");
 const wa=document.getElementById("whatsappEnquiry");
 const em=document.getElementById("emailEnquiry");
 const close=document.querySelector(".enquiry-close");
 document.querySelectorAll(".service-enquire").forEach(link=>{
   link.addEventListener("click",e=>{
     e.preventDefault();
     const service=link.dataset.service;
     selected.textContent=service;
     const message=`Hello Rangwako Financial Advisory,\n\nI would like to enquire about your ${service} service.\n\nPlease provide me with more information about the service, the requirements and the next steps.\n\nThank you.`;
     wa.href="https://wa.me/27645131648?text="+encodeURIComponent(message);
     em.href="mailto:admin@rangwakofin.co.za?subject="+encodeURIComponent("Enquiry: "+service)+"&body="+encodeURIComponent(message);
     enquiryModal.classList.add("open");
     enquiryModal.setAttribute("aria-hidden","false");
   });
 });
 const hide=()=>{enquiryModal.classList.remove("open");enquiryModal.setAttribute("aria-hidden","true")};
 close.addEventListener("click",hide);
 enquiryModal.addEventListener("click",e=>{if(e.target===enquiryModal)hide()});
 document.addEventListener("keydown",e=>{if(e.key==="Escape")hide()});
}

const quoteForm=document.getElementById("fullQuoteForm");
if(quoteForm){
 const val=id=>document.getElementById(id).value.trim();
 const buildQuoteMessage=()=>{
   const name=val("qName"), business=val("qBusiness"), phone=val("qPhone"), email=val("qEmail"), service=val("qService"), details=val("qMessage");
   if(!name || !phone || !service){
     alert("Please enter your name, phone number and select a service.");
     return null;
   }
   return `Hello Rangwako Financial Advisory,\n\nMy name is ${name}${business ? ` from ${business}` : ""}.\n\nI would like to enquire about your ${service} service.\n\nPhone: ${phone}${email ? `\nEmail: ${email}` : ""}${details ? `\n\nAdditional information:\n${details}` : ""}\n\nPlease provide me with more information about the service, the requirements and the next steps.\n\nThank you.`;
 };
 document.getElementById("sendWhatsApp").addEventListener("click",()=>{
   const msg=buildQuoteMessage(); if(!msg)return;
   window.open("https://wa.me/27645131648?text="+encodeURIComponent(msg),"_blank");
 });
 document.getElementById("sendEmail").addEventListener("click",()=>{
   const msg=buildQuoteMessage(); if(!msg)return;
   const service=val("qService");
   window.location.href="mailto:admin@rangwakofin.co.za?subject="+encodeURIComponent("Service Enquiry: "+service)+"&body="+encodeURIComponent(msg);
 });
}

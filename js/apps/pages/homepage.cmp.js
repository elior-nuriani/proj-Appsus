'use strict'

export default {
    template: `<section class="home flex row center">
                    <div class="homepage-main-box flex column">
                        <h3>Welcome To
                           <span class="logo-name"> APPSUS </span>
                        </h3>
                        <h2>Discover Our Latest Apps </h2>
                    </div>
                    <div class="offcanvas-btn" @click="toggleContact" :class="toggleClassBtn">
                        <i class="fas fa-pen"></i>
                    </div>
                    <aside class="offcanvas-aside" :class="toggleClassAside">
                    <section id="contact" class="flex column align-center">
                    <h4>Contact Us</h4>
                    <form>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                      </div>
                      <div class="form-group">
                        <label for="subject">Subjet</label>
                        <input type="text" class="form-control" id="subject" placeholder="Contact me" autocomplete="off">
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Body Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                      </div>
                      <div class="contact-btn flex space-evenly">
                        <button type="button" class="btn btn-primary" @click="sendContact">Submit</button>
                        <button type="button" class="btn btn-warning" @click="toggleContact">Cancel</button>
                      </div>
                    </form>
                  </section>
              
                    </aside>
                </section>`
    ,
    data(){
        return{
            isOpenContact:false
        }
    },
    methods:{
        toggleContact(){
            this.isOpenContact = !this.isOpenContact
        },
        sendContact(){
            Swal.fire(
                'Thank You For Contact Us ',
                '',
                'success'
              )
        }
    },
    computed:{
        toggleClassBtn(){
            return {'offcanvas-btn-open': this.isOpenContact}
        },
        toggleClassAside(){
            return {'offcanvas-aside-open': this.isOpenContact}
        }
    }
}
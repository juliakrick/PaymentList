export default{
    install(Vue){
        if(this.installed){
            return
        }
        this.installed = true

        Vue.prototype.$modal = {
            EventBus: new Vue(),
            show(name, settings){
                this.EventBus.$emit('shown', {name, ...settings}, this.property)
            },
            hide(){
                this.EventBus.$emit('hide')           
             },

            edit(){
                this.EventBus.$emit('edit') 
            }

        }
    }
}
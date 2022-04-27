import { Notify } from 'quasar';

import Breadcrumb from 'components/breadcrumb';

import VulnService from '@/services/vulnerability';
import AuditService from '@/services/audit';
import DataService from '@/services/data';
import Utils from '@/services/utils';

import { $t } from '@/boot/i18n'

export default {
    props: {
        frontEndAuditState: Number,
        parentState: String,
        parentApprovals: Array
    },
    data: () => {
        return {
	    newSection: {},

            loading: true,
            htmlEncode: Utils.htmlEncode,
            AUDIT_VIEW_STATE: Utils.AUDIT_VIEW_STATE,

        }
    },

    components: {
        Breadcrumb
    },

    mounted: function() {
        this.auditId = this.$route.params.auditId;
        this.dtLanguage = this.$parent.audit.language;

        this.$socket.emit('menu', {menu: 'addSections', room: this.auditId});
    },

    computed: {
    },

    methods: {

        createSection: function() {
            var section = null;
            if (this.newSection) {
                section = {
		    field: this.newSection.field,
		    name: this.newSection.name,
		    text: this.newSection.text,
		    customFields: this.newSection.customFields
                };
            }

	    console.log(section);
            if (section) {
                AuditService.createSection(this.auditId, section)
                .then(() => {
                    this.sectionTitle = "";
                    Notify.create({
                        message: $t('msg.sectionCreateOk'),
                        color: 'positive',
                        textColor:'white',
                        position: 'top-right'
                    })
                })
                .catch((err) => {
                    Notify.create({
                        message: err.response.data.datas,
                        color: 'negative',
                        textColor:'white',
                        position: 'top-right'
                    })
                })
            }
        },
    }
}

<template>
    <div class="modal" data-backdrop="static" data-keyboard="false" :id="_id" >
        <div class="modal-dialog" :class="_size">
            <div class="modal-content" :class="_size">
                <div class="modal-header" :class="_headerColor">
                    <h5 class="title"><slot name="header"></slot></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                     <slot name="main"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                    <button class="btn btn-white" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'id',
            'size',
            'type'
        ],
        computed: {
            _id: function() {
                return this.id ? this.id : 'customModal';
            },
            _size: function() {
                return this.size ? this.size : 'modal-md';
            },
            _headerColor: function() {
                let background = '';
                switch(this.type) {
                    case 'crear':
                        background += 'bg-success text-white';
                        break;
                    case 'editar':
                    case 'detalles':
                        background += 'bg-info text-white';
                        break;
                    case 'eliminar': 
                        background += 'bg-danger text-white';
                        break;
                }
                return background;
            }
        },
    };
</script>

<style>
    .modal .modal-header {
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
    }

    .modal .modal-header .title {
        margin: 0;
    }
</style>

<!--style scoped>
    .c-modal {
        position: absolute;
        margin: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: none;
        z-index: 99999;
    }

    .c-modal.show {
        display: block;
    }

    .c-modal .content {
        position: sticky;
        min-height: 200px;
        width: 600px;
        top: 50px;
        margin: 0 auto;

        background-color: #FFF;
        border: 1px solid #3094C2;
        border-radius: .3rem;
        color: #000;
        padding: 0;
    }

    .c-modal .content.extra-large {
        width: 1000px;
    }
    .c-modal .content.large {
        width: 800px;
    }
    .c-modal .content.medium {
        width: 600px;
    }
    .c-modal .content.small {
        width: 400px;
    }

    .c-modal .body {
        font-size: 14px;
        line-height: 1.5;
        font-weight: 400;
        min-height: 100px;

        height: auto;
        /* 50 = container top | 70 = header height | 58 = footer height | 50 = container bottom */
        max-height: calc(100vh - 50px - 70px - 58px - 50px);
        overflow: auto;
    }
    .c-modal .body .row {
        margin: 0;
    }

    .c-modal table.table-bordered th,
    .c-modal table.table-bordered td {
        border: 1px solid #3094C2 !important;
    }

    @media all and (max-width: 1100px) {
        .c-modal .content.extra-large {
            width: 95%;
        }
    }
    @media all and (max-width: 870px) {
        .c-modal .content.large {
            width: 90%;
        }
    }
    @media all and (max-width: 768px) {
        .c-modal .content.medium {
            width: 90%;
        }
    }
    @media all and (max-width: 530px) {
        .c-modal .content.small {
            width: 90%;
        }
    }
</style>

<style>
    .c-modal .main-timeline2 {
        width: 100%;
    }
    .c-modal .timeline {
        min-height: 130px;
    }
    .c-modal .timeline .timeline-content .inner-content .title {
        display: block !important;
        margin-bottom: 0;
        padding-bottom: 0;
        font-size: 22px;
    }
    .c-modal .timeline .timeline-content .inner-content .subtitle {
        display: block !important;
        font-size: 16px;
    }
</style-->
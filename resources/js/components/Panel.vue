<template>
    <div class="pb-3">
    <!-- <div class="panelParent col-xs-12" :class="size ? size : ''"> -->
        <div class="panel panel-inverse" :class="_panelClass" data-sortable-id="ui-widget-1">

            <div class="panel-heading" :class="_headerClass" v-if="hasHeader && (type != 'resultado' || hasButtons)">
                <h4 class="panel-title" :style="marginTop">
                    <slot name="header"></slot>
                </h4>
                <div class="panel-heading-btn">
                    <div class="float-right">
                        <slot name="buttons"></slot>
                    </div>
                </div>
            </div>

            <div class="panel-toolbar" v-if="hasToolbar">
                <h3 class="panel-title">
                    <slot name="toolbar"></slot>
                </h3>
            </div>

            <div :class='[_bodyClass, _bodyColor]'>
                <slot name="main"></slot>
            </div>

            <div class="panel-footer text-right" :class="_footerClass">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'id',
            'footer-class',
            'size',
            'type',
        ],
        computed: {
            hasHeader() {
                return !!this.$slots['header'];
            },
            hasButtons() {
                return !!this.$slots['buttons'];
            },
            hasToolbar() {
                return !!this.$slots['toolbar'];
            },
            _footerClass() {
                let _class = this.footerClass ? this.footerClass : '';
                if (!this.$slots['footer']) {
                    _class += ' d-none';
                }
                return _class;
            },
            _panelClass: function() {
                let background = '';
                if (this.type) {
                    switch (this.type) {
                        case 'filtro':
                        case 'crud':
                        case 'form':
                        case 'list':
                            background = 'panel-info';
                            break;
                        case 'profile':
                            background = 'bg-material-indigo';
                            break;
                    }
                }
                return background;
            },
            // estilos
            _headerClass: function() {
                //
            },
            _cardClass: function() { // REVISAR PARA PROFILE
                let background = 'card';
                if (this.type) {
                    switch (this.type) {
                        case 'profile':
                            background = 'bordered-card border-info';
                            break;
                    }
                }
                return background;
            },
            _bodyClass: function() {
                let clase = '';
                if (this.type) {
                    switch (this.type) {
                        case 'filtro':
                        case 'crud':
                        case 'form':
                            clase = 'panel-body';
                            break;
                    }
                }
                return clase;
            },
            _bodyColor: function() {
                let background = '';
                if (this.type) {
                    switch (this.type) {
                        case 'profile':
                            background = 'text-info';
                            break;
                    }
                }
                return background;
            },
            marginTop: function() {
                let style = '';

                if (this.$slots.buttons) {
                    style = 'margin-top: 5px;';
                }

                return style;
            },
        },
    }
</script>
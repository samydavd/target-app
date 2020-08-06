@extends('layouts.app')

@section('content')
	<div id="custom-app">
		<router-view></router-view>
	</div>
@endsection

@section('script')
	<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
@endsection
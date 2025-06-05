<div class="{{ $block->mod($mods ?? []) }}@if($class ?? false) {{ $class }}@endif">
    <h2 class="{{ $block->elem('title') }}">{!! $title !!}</h2>
    <ul class="{{ $block->elem('list') }}">
        @foreach ($countries as $country)
        <li class="{{ $block->elem('item') }}">{!! $country['NAME'] !!}</li>
        @endforeach
    </ul>
</div>
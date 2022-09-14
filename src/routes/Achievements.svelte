<script>
  import AcheivementCard from '../lib/AcheivementCard.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <AcheivementCard
    icon="🪙"
    name="Priopoäng"
    description="Spendera priopoäng och öka nivån!"
    level={1}
    levels={3}
    progress={57}
  />
  <AcheivementCard
    icon="☕"
    name="Kaffe"
    description="Köp en massa bönjuice för att vakna till liv"
    level={2}
    levels={3}
    progress={20}
  />
  <AcheivementCard
    icon="🚂"
    name="Första resan"
    description="Åk din första resa med SJ"
    level={1}
    levels={1}
    progress={100}
  />
  <AcheivementCard
    icon="🚅"
    name="Res med SJ"
    description="Varje resa ökar din nivå och ger priopoäng"
    level={2}
    levels={4}
    progress={60}
  />
</div>

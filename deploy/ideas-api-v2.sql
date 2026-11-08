-- ideas-api v2（P2 云端模式）增量迁移：2026-11-08
-- 向后兼容：旧客户端（网站、ideas.py）不传 if_rev / client_id 时行为不变。
ALTER TABLE ideas ADD COLUMN IF NOT EXISTS rev integer NOT NULL DEFAULT 0;
ALTER TABLE idea_updates ADD COLUMN IF NOT EXISTS client_id text;
ALTER TABLE idea_links ADD COLUMN IF NOT EXISTS client_id text;
CREATE UNIQUE INDEX IF NOT EXISTS uq_idea_updates_client ON idea_updates (idea_id, client_id) WHERE client_id IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS uq_idea_links_client ON idea_links (idea_id, client_id) WHERE client_id IS NOT NULL;
